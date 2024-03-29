const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

// Post Route
// Don't Need To Add /posts as the middleware will link it
// Get all the posts in Async/await way
router.get('/', async (req, res) => {
    try {
        const posts = await Post.find(); // Mongoose function to find the posts
        res.json(posts);
    } catch (err) {
        res.json({message:err});
    }
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
// This function submits a post
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

// Get Specific Post by ID
router.get('/:postId', async (req, res) => {
    try {
        const post = await Post.findById(req.params.postId); // Wait for the promise
        res.json(post);
    }catch (err) {
        res.json({message:err});
    }
});

// Delete a post
router.delete ('/:postId', async (req, res) => {
    try {
        const deletedPost = await Post.remove({_id: req.params.postId});
        res.json(deletedPost);
    } catch(err) {
        res.json({message: err});
    }
});

// Update a Post using Patch
router.patch('/:postId', async (req, res) => {
    try {
        const updatedPost = await Post.updateOne(
            {_id: req.params.postId},
            { $set: {title: req.body.title}}
            );
        res.json(updatedPost);
    }catch(err) {
        res.json({message:err});
    }
});


// Exporting Router To Make It Visible To Other Files
module.exports = router;