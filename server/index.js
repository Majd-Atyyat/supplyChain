require('dotenv').config();
const express = require('express');
const app = express();
const routes = require('./src/routes');
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Use Routes
app.use('/', routes);

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
