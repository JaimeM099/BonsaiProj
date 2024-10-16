//example model fro user.js
const mongoose = require('mongoose');

const userScehma = new mongoose.Schema({
    username: { type: String, required: true, unique: true},
    password: { type: String, required: true },
});

module.exports = mongoose.model('User', userScehma);