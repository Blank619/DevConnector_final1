const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const { check, validationResult } = require('express-validator')

// calling the schema model to register the User
const User = require('././Users.js');

// @route  Post api/users
// @desc   Test route, might add users, register
// @access public
router.post('/', [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'please include valid email').isEmail(),
    check('password', 'please enter a password with 6 or more ').isLength({
        min: 6
    })
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            errors: errors.array()
        });
    }
    //console.log(req.body); checking what we recieved in the body

    const { name, email, password } = req.body;

    // console.log(name)
    // console.log(email)
    // console.log(password)
    try {

        console.log('inside try');
        // see if the user exists 
        //    let user = await User.findOne({email});

        //     if(user){
        //         res.status(400).json({
        //            errors : [{
        //                msg: 'User already exists'
        //             }]
        //     });
        //         }

        // Get users gravatar



        user = new User({
            name,
            email,
            password
        });
        console.log(user)



        // encrypt the password using bcrypt
        //const salt = await bcrypt.genSalt(10);
        // user.password = await bcrypt.hash(password, salt);

        //await k.save();
        // Return JWT


        res.send('User Registered');
    }
    catch (error) {
        console.log(error.message);
        res.status(500).send('Server error')

    }


});


module.exports = router;