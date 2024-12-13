const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const authenticateToken = require ('../middleware/authenticateToken') //Importing middleware
const router = express.Router();

const JWT_SECRET = process.env.JWT_SECRET || '@8Jm12s$p3ruIpl'

//Route for Login
router.post('/login', async(req, res) => {
    // according to gpt it is best to add logic to check user credentials
    //Will need to add something to repsond with success or failure
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ error: 'User not found' });

        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch) return res.status(400).json({ error: 'Password Invalid' });

        //Generate the JWT token
        const token = jwt.sign({ id: user._id, email: user.email }, JWT_SECRET, { expiresIn: '1h' });
        
        //Send token to frontend
        res.status(200).json({ message: 'Login succesful', token, user: { id: user._id, email: user.email}});
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
});

//Route for Signup
router.post('/register', async (req, res) => {
    //add logic to create new user
    console.log("recieved signup request:", req.body); //this is a debug line
    const{ email, password } = req.body;
    if(!email || !password) {
        return res.status(400).json({ error: "Email and password are required" });
    }

    try {
        let user = await User.findOne({ email });
        if (user) return res.status(400).json({ error: 'Email already in use '});

        //Hash passowrd and save user
        const hashedPassword = await bcrypt.hash(password, 10);
        user = new User({ email, password: hashedPassword});

        await user.save();

        //Will generate the JWT token
        const token = jwt.sign({ if: user._id, email: user.email }, JWT_SECRET, { expiresIn: '1h'});

        console.log("User registered successfully:", user);
        res.status(201).json({ message: 'User registered succesfully', token });
    } catch (error) {
        console.log("Error in /register route:", error); //this is also a debug line
        res.status(500).json({ error: 'Server error' });
    }
});

//this will be the protected rout for profile page
router.get('/profile', authenticateToken, async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password'); //Will exclude the password
        if(!user) return res.status(404).json({ error: 'User not found' });

        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
});

module.exports = router;
