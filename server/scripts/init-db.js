const mysql = require('mysql2');
const bcrypt = require('bcryptjs');
require('dotenv').config();

// Create connection to MySQL server (without specifying database)
const connection = mysql.createConnection({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || ''
});

// Connect to MySQL
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    process.exit(1);
  }
  console.log('Connected to MySQL server');
});

// Create database
const dbName = process.env.DB_NAME || 'humble_pearl';
connection.query(`CREATE DATABASE IF NOT EXISTS ${dbName}`, (err) => {
  if (err) {
    console.error('Error creating database:', err);
    process.exit(1);
  }
  console.log(`Database '${dbName}' created or already exists`);
});

// Use the database
connection.query(`USE ${dbName}`, (err) => {
  if (err) {
    console.error('Error using database:', err);
    process.exit(1);
  }
  console.log(`Using database '${dbName}'`);
});

// Create tables
const createTables = async () => {
  try {
    // Create users table
    await connection.promise().execute(`
      CREATE TABLE IF NOT EXISTS users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        username VARCHAR(50) UNIQUE NOT NULL,
        email VARCHAR(100) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        first_name VARCHAR(50),
        last_name VARCHAR(50),
        role ENUM('admin', 'user') DEFAULT 'user',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
      )
    `);

    // Create items table
    await connection.promise().execute(`
      CREATE TABLE IF NOT EXISTS items (
        id INT AUTO_INCREMENT PRIMARY KEY,
        title VARCHAR(200) NOT NULL,
        description TEXT,
        price DECIMAL(10, 2),
        category VARCHAR(100),
        image_url VARCHAR(500),
        user_id INT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
      )
    `);

    console.log('Tables created successfully');

    // Insert sample data
    await insertSampleData();
    
  } catch (error) {
    console.error('Error creating tables:', error);
    process.exit(1);
  }
};

const insertSampleData = async () => {
  try {
    // Check if admin user already exists
    const [adminUsers] = await connection.promise().execute(
      'SELECT id FROM users WHERE username = ?',
      ['admin']
    );

    if (adminUsers.length === 0) {
      // Create admin user
      const hashedPassword = await bcrypt.hash('admin123', 12);
      await connection.promise().execute(
        'INSERT INTO users (username, email, password, first_name, last_name, role) VALUES (?, ?, ?, ?, ?, ?)',
        ['admin', 'admin@humblepearl.com', hashedPassword, 'Admin', 'User', 'admin']
      );
      console.log('Admin user created (username: admin, password: admin123)');
    }

    // Check if sample items exist
    const [items] = await connection.promise().execute('SELECT COUNT(*) as count FROM items');
    
    if (items[0].count === 0) {
      // Get admin user ID
      const [adminUser] = await connection.promise().execute(
        'SELECT id FROM users WHERE username = ?',
        ['admin']
      );

      const adminId = adminUser[0].id;

      // Insert sample items
      const sampleItems = [
        {
          title: 'Vintage Camera',
          description: 'A beautiful vintage film camera in excellent condition. Perfect for photography enthusiasts.',
          price: 299.99,
          category: 'Electronics',
          image_url: 'https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=500'
        },
        {
          title: 'Handmade Ceramic Bowl',
          description: 'Unique handcrafted ceramic bowl with intricate patterns. Made by local artisans.',
          price: 45.00,
          category: 'Art & Crafts',
          image_url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500'
        },
        {
          title: 'Antique Wooden Chair',
          description: 'Classic wooden chair with beautiful patina. Great for adding character to any room.',
          price: 150.00,
          category: 'Furniture',
          image_url: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500'
        },
        {
          title: 'Rare Book Collection',
          description: 'Collection of rare first edition books from the 1920s. Perfect for collectors.',
          price: 89.99,
          category: 'Books',
          image_url: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=500'
        },
        {
          title: 'Artisan Coffee Beans',
          description: 'Premium single-origin coffee beans roasted to perfection. Limited edition batch.',
          price: 24.99,
          category: 'Food & Beverage',
          image_url: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=500'
        }
      ];

      for (const item of sampleItems) {
        await connection.promise().execute(
          'INSERT INTO items (title, description, price, category, image_url, user_id) VALUES (?, ?, ?, ?, ?, ?)',
          [item.title, item.description, item.price, item.category, item.image_url, adminId]
        );
      }

      console.log('Sample items created successfully');
    }

    console.log('Database initialization completed!');
    
  } catch (error) {
    console.error('Error inserting sample data:', error);
  } finally {
    connection.end();
  }
};

// Run the initialization
createTables();
