const express = require('express');
const router = express.Router();


// @route  get api/profile
// @desc   Test route, might add users, register
// @access public
router.get('/', (req,res) => res.send('profile Route'));


module.exports = router;