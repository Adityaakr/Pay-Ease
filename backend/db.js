// backend/db.js
//account and balance will be stored in DB as this 
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://hemlataverma30021:adityakr@cluster0.dy7lf73.mongodb.net/')
.then(() => console.log("Connected to MongoDB"))
.catch((err) => console.log(err))

// Create a Schema for Users
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        minLength: 3,
        maxLength: 30
    },
    password: {
        type: String,
        required: true,
        minLength: 6
    },
    firstName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    }
});

const accountSchema = new mongoose.Schema({
    userId: {
        //referancing to user only the user that is
        //already present should able to see account (No -> userId and Balance).
        type: mongoose.Schema.Types.ObjectId, // Reference to User model
        ref: 'User',
        required: true
    },
    balance: {
        type: Number,
        required: true
    }
});

const Account = mongoose.model('Account', accountSchema);
const User = mongoose.model('User', userSchema);


module.exports = {
	User,
    Account
};