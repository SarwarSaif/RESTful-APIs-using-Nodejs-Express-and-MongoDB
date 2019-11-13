// Import Express
const express = require('express');
// Execute Express
const app = express();
// Import Mongoose Instance
const mongoose = require('mongoose');
// Import Body-parser
const bodyParser = require('body-parser');
// Import CORS
const cors = require('cors');
// Import DotENV file 
require('dotenv/config');

// Create a middleware for Cross Platform support using CORS
app.use(cors());
// Create a middleware for body-parser to convert the response
app.use(bodyParser.json()); // This will convert all the response


// Creating Routes
// Import Post Routes
const postsRoutes = require('./routes/posts');
// Using Middleware To Redirect To The Routes Files
app.use('/posts', postsRoutes);

// Home Route
app.get('/', (req, res) => {
    res.send('Home route');
});



// Connect To MongoDBAtlas
mongoose.connect(
    process.env.DB_CONNECTION,
    { useNewUrlParser: true,  useUnifiedTopology: true },
    () => console.log('Database connected  successfully!'));

// To listen from the server
app.listen(3000);

