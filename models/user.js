const mongoose = require('mongoose')

// user.js

const foodSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
    },
    expiryDate: {
        type: Date,
        required: true,
        get: (date) => date ? date.toLocaleDateString('en-GB') : ''
    },
    eaten: {
        type: Boolean,
        default: false,
    },
});




const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    foods: [foodSchema]

}, { timestamps: true })

const User = mongoose.model('User', userSchema)

module.exports = User