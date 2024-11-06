const express = require('express');
const User = require('../models/User');
const bcrypt = require('bcryptjs');

const router = express.Router();

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

        res.status(200).json({ message: 'Login succesful' });
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
});

//Route for Signup
router.post('/register', async (req, res) => {
    //add logic to create new user
    //will need to add something to respond with success or failure
    const{ email, password } = req.body;

    try {
        let user = await User.findOne({ email });
        if (user) return res.status(400).json({ error: 'Email already in use '});

        const hashedPassword = await bcrypt.hash(password, 10);

        user = new User({ email, password: hashedPassword });
        await user.save();

        res.status(201).json({ message: 'User registered succesfully' });
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
});

module.exports = router;