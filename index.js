// Node.js Hello World REST API with CRUD operations
// In-memory storage (data resets on container restart)

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON request bodies
app.use(express.json());

// In-memory data store (array of items)
let items = [
  { id: 1, name: 'Docker', description: 'Container platform' },
  { id: 2, name: 'Node.js', description: 'JavaScript runtime' }
];

// Counter for generating new IDs
let nextId = 3;

// ============================================
// ROUTES (CRUD Operations)
// ============================================

// Health check endpoint
app.get('/', (req, res) => {
  res.json({
    message: 'Node.js Hello World API is running!',
    endpoints: {
      'GET /': 'API information',
      'GET /api/items': 'Get all items',
      'GET /api/items/:id': 'Get item by ID',
      'POST /api/items': 'Create new item',
      'PUT /api/items/:id': 'Update item by ID',
      'DELETE /api/items/:id': 'Delete item by ID'
    }
  });
});

// READ - Get all items
app.get('/api/items', (req, res) => {
  res.json({
    success: true,
    count: items.length,
    data: items
  });
});

// READ - Get single item by ID
app.get('/api/items/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const item = items.find(i => i.id === id);
  
  if (!item) {
    return res.status(404).json({
      success: false,
      message: `Item with ID ${id} not found`
    });
  }
  
  res.json({
    success: true,
    data: item
  });
});

// CREATE - Add new item
app.post('/api/items', (req, res) => {
  const { name, description } = req.body;
  
  // Validation
  if (!name || !description) {
    return res.status(400).json({
      success: false,
      message: 'Please provide both name and description'
    });
  }
  
  const newItem = {
    id: nextId++,
    name,
    description
  };
  
  items.push(newItem);
  
  res.status(201).json({
    success: true,
    message: 'Item created successfully',
    data: newItem
  });
});

// UPDATE - Update existing item
app.put('/api/items/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { name, description } = req.body;
  const itemIndex = items.findIndex(i => i.id === id);
  
  if (itemIndex === -1) {
    return res.status(404).json({
      success: false,
      message: `Item with ID ${id} not found`
    });
  }
  
  // Update item
  if (name) items[itemIndex].name = name;
  if (description) items[itemIndex].description = description;
  
  res.json({
    success: true,
    message: 'Item updated successfully',
    data: items[itemIndex]
  });
});

// DELETE - Remove item
app.delete('/api/items/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const itemIndex = items.findIndex(i => i.id === id);
  
  if (itemIndex === -1) {
    return res.status(404).json({
      success: false,
      message: `Item with ID ${id} not found`
    });
  }
  
  const deletedItem = items.splice(itemIndex, 1)[0];
  
  res.json({
    success: true,
    message: 'Item deleted successfully',
    data: deletedItem
  });
});

// 404 handler for undefined routes
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found'
  });
});

// Start server
app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Server running on http://0.0.0.0:${PORT}`);
  console.log(`📝 Environment: ${process.env.NODE_ENV || 'development'}`);
});
