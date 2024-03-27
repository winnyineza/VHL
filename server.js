// server.js

const express = require('express');
const path = require('path');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Dummy secret for demonstration purposes
const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret';

// API endpoints
app.post('/api/auth/signin', (req, res) => {
  // Implement your sign-in logic here
});

app.post('/api/auth/signup', async (req, res) => {
  // Implement your sign-up logic here
});

// Serve React static files after build in production
if (process.env.NODE_ENV === 'production') {
  // Set the static folder
  app.use(express.static(path.join(__dirname, 'build')));

  // Handles any requests that don't match the ones above
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
