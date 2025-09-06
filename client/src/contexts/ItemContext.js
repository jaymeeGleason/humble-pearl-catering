import React, { createContext, useContext, useState } from 'react';
import axios from 'axios';

const ItemContext = createContext();

export const useItems = () => {
  const context = useContext(ItemContext);
  if (!context) {
    throw new Error('useItems must be used within an ItemProvider');
  }
  return context;
};

export const ItemProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 10,
    total: 0,
    pages: 0
  });

  const fetchItems = async (params = {}) => {
    setLoading(true);
    try {
      const response = await axios.get('/api/items', { params });
      setItems(response.data.items);
      setPagination(response.data.pagination);
    } catch (error) {
      console.error('Failed to fetch items:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchItem = async (id) => {
    try {
      const response = await axios.get(`/api/items/${id}`);
      return response.data;
    } catch (error) {
      console.error('Failed to fetch item:', error);
      throw error;
    }
  };

  const createItem = async (itemData) => {
    try {
      const response = await axios.post('/api/items', itemData);
      setItems(prev => [response.data, ...prev]);
      return response.data;
    } catch (error) {
      console.error('Failed to create item:', error);
      throw error;
    }
  };

  const updateItem = async (id, itemData) => {
    try {
      const response = await axios.put(`/api/items/${id}`, itemData);
      setItems(prev => prev.map(item => 
        item.id === id ? { ...item, ...itemData } : item
      ));
      return response.data;
    } catch (error) {
      console.error('Failed to update item:', error);
      throw error;
    }
  };

  const deleteItem = async (id) => {
    try {
      await axios.delete(`/api/items/${id}`);
      setItems(prev => prev.filter(item => item.id !== id));
    } catch (error) {
      console.error('Failed to delete item:', error);
      throw error;
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await axios.get('/api/items/categories/list');
      return response.data;
    } catch (error) {
      console.error('Failed to fetch categories:', error);
      return [];
    }
  };

  const value = {
    items,
    loading,
    pagination,
    fetchItems,
    fetchItem,
    createItem,
    updateItem,
    deleteItem,
    fetchCategories
  };

  return (
    <ItemContext.Provider value={value}>
      {children}
    </ItemContext.Provider>
  );
};
