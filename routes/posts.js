const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

// Post Route
// Don't Need To Add /posts as the middleware will link it
router.get('/', (req, res) => {
    res.send('We are on posts');
})

// Use the post model
router.post('/', (req, res)  => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });

    post.save() // Returns a promise
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.json({ message: 'Post Creation Falied!' });
        });

});

// Exporting Router To Make It Visible To Other Files
module.exports = router;