const express = require('express');
const router = express.Router();


// @route  get api/auth
// @desc   Test route, might add users, register
// @access public
router.get('/', (req,res) => res.send('Auth Route'));


module.exports = router;