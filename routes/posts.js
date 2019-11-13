const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

// Post Route
// Don't Need To Add /posts as the middleware will link it
router.get('/', (req, res) => {
    res.send('We are on posts');
})

// Use the post model 
// General way of creating post route
// router.post('/', (req, res)  => {
//     const post = new Post({
//         title: req.body.title,
//         description: req.body.description
//     });

//     //save the post in the Database
//     post.save() // Returns a promise
//         .then(data => {
//             res.json(data);
//         })
//         .catch(err => {
//             res.json({ message: 'Post Creation Falied!' });
//         });

// });
// Convert this function into "Async/await"
// to work with the promises more comfortably
router.post('/', async (req, res)  => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });

    try {
        //save the post in the Database in async way
        const savedPost = await post.save(); // Returns a promise
        res.json(savedPost);
    } catch (err) {
        res.json({ message: err });
    }

});

// Exporting Router To Make It Visible To Other Files
module.exports = router;