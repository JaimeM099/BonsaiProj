const express = require('express');
const User = require('../models/User');

const router = express.Router();

router.post('/login', async(req, res) => {
    const { username, password } = req.body;
    // according to gpt it is best to add logic to check user credentials
    //Will need to add something to repsond with success or failure
});

router.post('/register', async (req, res) => {
    const{ username, password } = req.body;
    //add logic to create new user
    //will need to add something to respond with success or failure
});

module.exports = router;