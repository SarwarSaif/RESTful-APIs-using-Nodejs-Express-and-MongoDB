const express = require('express');

const router = express.Router();

// Post Route
// Don't Need To Add /posts as the middleware will link it
router.get('/', (req, res) => {
    res.send('We are on posts');
})


// Exporting Router To Make It Visible To Other Files
module.exports = router;