// Import Express
const express = require('express');
// Execute Express
const app = express();

// Creating Routes

// Home Route
app.get('/', (req, res) => {
    res.send('Home route');
});

// Post Route
app.get('/posts', (req, res) => {
    res.send('We are on posts');
})

// To listen from the server
app.listen(3000);

