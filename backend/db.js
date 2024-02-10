const mongoose = require("mongoose")

mongoose.connect("URL")

const UserSchema = mongoose.Schema({
        username: String,
        password: String,
        firstname:String,
        lastName:String,
})

//creating Modal
const User = mongoose.model("User", UserSchema);

module.exports = {
        User
};