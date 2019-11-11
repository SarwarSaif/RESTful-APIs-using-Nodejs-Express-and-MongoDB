// Import Express
const express = require('express');
// Execute Express
const app = express();

mongodb+srv://Saif001:try007@cluster0-bzdu4.mongodb.net/test?retryWrites=true&w=majority

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

