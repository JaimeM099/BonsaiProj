const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const authenticateToken = require ('../middleware/authenticateToken') //Importing middleware

const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET || '@8Jm12s$p3ruIpl'

//Route for Signup
router.post('/register', async (req, res) => {
    console.log("recieved signup request:", req.body); //this is a debug line
    const{ name, email, password } = req.body;

    //Check if all fields are provided
    if (!name || !email || !password) {
        return res.status(400).json({ erro: 'All fields are required' })
    }

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: 'User already exists' });
        }
        
        //Hash passowrd and save user
        const user = new User({ name, email, password});
        await user.save();

        //Will generate the JWT token
        const token = jwt.sign({ id: user._id, email: user.email }, JWT_SECRET, { expiresIn: '1h'});

        res.status(201).json({
            message: 'Signup succesful',
            token,
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
            },
        });
    } catch (error) {
        console.log("Error in /signup route:", error); //this is also a debug line
        res.status(500).json({ error: 'Server error' });
    }
});

//Route for Login
router.post('/login', async(req, res) => {
    // according to gpt it is best to add logic to check user credentials
    //Will need to add something to repsond with success or failure
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ message: 'User not found' });

        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch) return res.status(400).json({ message: 'Password Invalid' });

        //Generate the JWT token
        const token = jwt.sign({ id: user._id, email: user.email }, JWT_SECRET, { expiresIn: '1h' });

        res.status(200).json({
            message: 'Login succesful',
            token,
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
            },
        });
    } catch (error) {
        console.error("Error in /login route", error);
        res.status(500).json({ error: 'Server error' });
    }
});

//this will be the protected route for profile page
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
