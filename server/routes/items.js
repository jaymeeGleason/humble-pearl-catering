const express = require('express');
const db = require('../config/database');
const { authenticateToken, requireRole } = require('../middleware/auth');

const router = express.Router();

// Get all items
router.get('/', async (req, res) => {
  try {
    const { page = 1, limit = 10, category, search } = req.query;
    const offset = (page - 1) * limit;

    let whereClause = '';
    let params = [];

    if (category) {
      whereClause += ' WHERE category = ?';
      params.push(category);
    }

    if (search) {
      const searchCondition = ' WHERE title LIKE ? OR description LIKE ?';
      if (whereClause) {
        whereClause += ' AND (title LIKE ? OR description LIKE ?)';
        params.push(`%${search}%`, `%${search}%`);
      } else {
        whereClause = searchCondition;
        params.push(`%${search}%`, `%${search}%`);
      }
    }

    const items = await db.query(
      `SELECT i.*, u.username as author_name 
       FROM items i 
       LEFT JOIN users u ON i.user_id = u.id 
       ${whereClause}
       ORDER BY i.created_at DESC 
       LIMIT ? OFFSET ?`,
      [...params, parseInt(limit), offset]
    );

    // Get total count for pagination
    const countResult = await db.query(
      `SELECT COUNT(*) as total FROM items i ${whereClause}`,
      params
    );

    res.json({
      items,
      pagination: {
        page: parseInt(page),
        limit: parseInt(limit),
        total: countResult[0].total,
        pages: Math.ceil(countResult[0].total / limit)
      }
    });
  } catch (error) {
    console.error('Get items error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Get item by ID
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const items = await db.query(
      `SELECT i.*, u.username as author_name 
       FROM items i 
       LEFT JOIN users u ON i.user_id = u.id 
       WHERE i.id = ?`,
      [id]
    );

    if (items.length === 0) {
      return res.status(404).json({ message: 'Item not found' });
    }

    res.json(items[0]);
  } catch (error) {
    console.error('Get item error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Create new item
router.post('/', authenticateToken, async (req, res) => {
  try {
    const { title, description, price, category, imageUrl } = req.body;

    if (!title) {
      return res.status(400).json({ message: 'Title is required' });
    }

    const result = await db.query(
      'INSERT INTO items (title, description, price, category, image_url, user_id) VALUES (?, ?, ?, ?, ?, ?)',
      [title, description, price, category, imageUrl, req.user.id]
    );

    const newItem = await db.query(
      `SELECT i.*, u.username as author_name 
       FROM items i 
       LEFT JOIN users u ON i.user_id = u.id 
       WHERE i.id = ?`,
      [result.insertId]
    );

    res.status(201).json(newItem[0]);
  } catch (error) {
    console.error('Create item error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Update item
router.put('/:id', authenticateToken, async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, price, category, imageUrl } = req.body;

    // Check if item exists and user owns it (or is admin)
    const items = await db.query('SELECT user_id FROM items WHERE id = ?', [id]);
    if (items.length === 0) {
      return res.status(404).json({ message: 'Item not found' });
    }

    if (req.user.role !== 'admin' && items[0].user_id !== req.user.id) {
      return res.status(403).json({ message: 'Access denied' });
    }

    await db.query(
      'UPDATE items SET title = ?, description = ?, price = ?, category = ?, image_url = ? WHERE id = ?',
      [title, description, price, category, imageUrl, id]
    );

    res.json({ message: 'Item updated successfully' });
  } catch (error) {
    console.error('Update item error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Delete item
router.delete('/:id', authenticateToken, async (req, res) => {
  try {
    const { id } = req.params;

    // Check if item exists and user owns it (or is admin)
    const items = await db.query('SELECT user_id FROM items WHERE id = ?', [id]);
    if (items.length === 0) {
      return res.status(404).json({ message: 'Item not found' });
    }

    if (req.user.role !== 'admin' && items[0].user_id !== req.user.id) {
      return res.status(403).json({ message: 'Access denied' });
    }

    await db.query('DELETE FROM items WHERE id = ?', [id]);

    res.json({ message: 'Item deleted successfully' });
  } catch (error) {
    console.error('Delete item error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Get categories
router.get('/categories/list', async (req, res) => {
  try {
    const categories = await db.query(
      'SELECT DISTINCT category FROM items WHERE category IS NOT NULL ORDER BY category'
    );
    res.json(categories.map(cat => cat.category));
  } catch (error) {
    console.error('Get categories error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
