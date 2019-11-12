// Import Mongoose 
const mongoose = require('mongoose');


// Create Schema 
const PostSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    date: {
        type: String,
        default: Date.now
    },
});

// Export The Mongoose Model
module.exports = mongoose.model('Posts', PostSchema);