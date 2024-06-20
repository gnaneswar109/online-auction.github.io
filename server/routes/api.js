const express = require('express');
const router = express.Router();

// Define a sample route for fetching data
router.get('/data', (req, res) => {
  const data = { message: 'Hello from the server!' };
  res.json(data);
});

module.exports = router;
