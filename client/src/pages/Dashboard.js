import React, { useEffect } from 'react';
import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  Grid,
  Button,
  Chip,
  Avatar
} from '@mui/material';
import {
  Add as AddIcon,
  List as ListIcon,
  Person as PersonIcon,
  TrendingUp as TrendingUpIcon
} from '@mui/icons-material';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useItems } from '../contexts/ItemContext';

const Dashboard = () => {
  const { user } = useAuth();
  const { items, fetchItems } = useItems();
  const navigate = useNavigate();

  useEffect(() => {
    fetchItems({ limit: 5 });
  }, [fetchItems]);

  const userItems = items.filter(item => item.user_id === user?.id);

  const stats = [
    {
      title: 'Total Items',
      value: userItems.length,
      icon: <ListIcon sx={{ fontSize: 40 }} />,
      color: 'primary'
    },
    {
      title: 'Recent Activity',
      value: userItems.filter(item => {
        const itemDate = new Date(item.created_at);
        const weekAgo = new Date();
        weekAgo.setDate(weekAgo.getDate() - 7);
        return itemDate > weekAgo;
      }).length,
      icon: <TrendingUpIcon sx={{ fontSize: 40 }} />,
      color: 'secondary'
    }
  ];

  return (
    <Container maxWidth="lg">
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Welcome back, {user?.firstName || user?.username}!
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          Here's what's happening with your items
        </Typography>
      </Box>

      {/* Stats Cards */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        {stats.map((stat, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card>
              <CardContent>
                <Box display="flex" alignItems="center" justifyContent="space-between">
                  <Box>
                    <Typography color="textSecondary" gutterBottom variant="h6">
                      {stat.title}
                    </Typography>
                    <Typography variant="h4" component="div">
                      {stat.value}
                    </Typography>
                  </Box>
                  <Avatar sx={{ bgcolor: `${stat.color}.main` }}>
                    {stat.icon}
                  </Avatar>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Quick Actions */}
      <Card sx={{ mb: 4 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Quick Actions
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
            <Button
              variant="contained"
              startIcon={<AddIcon />}
              component={Link}
              to="/items/create"
            >
              Create New Item
            </Button>
            <Button
              variant="outlined"
              startIcon={<ListIcon />}
              component={Link}
              to="/items"
            >
              View All Items
            </Button>
            <Button
              variant="outlined"
              startIcon={<PersonIcon />}
              component={Link}
              to="/profile"
            >
              Edit Profile
            </Button>
          </Box>
        </CardContent>
      </Card>

      {/* Recent Items */}
      <Card>
        <CardContent>
          <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
            <Typography variant="h6">
              Your Recent Items
            </Typography>
            <Button
              size="small"
              component={Link}
              to="/items"
            >
              View All
            </Button>
          </Box>
          
          {userItems.length === 0 ? (
            <Box textAlign="center" py={4}>
              <Typography variant="body1" color="text.secondary" gutterBottom>
                You haven't created any items yet
              </Typography>
              <Button
                variant="contained"
                startIcon={<AddIcon />}
                component={Link}
                to="/items/create"
              >
                Create Your First Item
              </Button>
            </Box>
          ) : (
            <Grid container spacing={2}>
              {userItems.slice(0, 3).map((item) => (
                <Grid item xs={12} sm={6} md={4} key={item.id}>
                  <Card 
                    variant="outlined" 
                    sx={{ 
                      cursor: 'pointer',
                      '&:hover': { boxShadow: 2 }
                    }}
                    onClick={() => navigate(`/items/${item.id}`)}
                  >
                    <CardContent>
                      <Typography variant="h6" component="h3" gutterBottom noWrap>
                        {item.title}
                      </Typography>
                      <Typography 
                        variant="body2" 
                        color="text.secondary" 
                        sx={{ 
                          mb: 2,
                          display: '-webkit-box',
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: 'vertical',
                          overflow: 'hidden'
                        }}
                      >
                        {item.description || 'No description'}
                      </Typography>
                      <Box display="flex" justifyContent="space-between" alignItems="center">
                        {item.category && (
                          <Chip 
                            label={item.category} 
                            size="small" 
                            variant="outlined"
                          />
                        )}
                        {item.price && (
                          <Typography variant="body2" color="primary">
                            ${item.price}
                          </Typography>
                        )}
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          )}
        </CardContent>
      </Card>
    </Container>
  );
};

export default Dashboard;
