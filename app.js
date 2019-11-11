// Import Express
const express = require('express');
// Execute Express
const app = express();

// Creating Routes

// Home Route
app.get('/', (req, res) => {
    res.send('Home route');
});

// To listen from the server
app.listen(3000);