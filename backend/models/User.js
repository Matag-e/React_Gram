const mongoose = require("mongoose");
const {Schema} = mongoose;

const userSchema = new Schema({
    name: String,
    email: String,
    password: String,
    profileImg: String,
    bio: String
}, {
    timestamps: true
})

const User = mongoose.model("User", userSchema)

module.exports = User;