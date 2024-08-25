const mongoose = require('mongoose')
// Define User Schema
const UserSchema = new mongoose.Schema({
    name: String,
    age: Number,
    email: String,
    password: String,
    gender: { type: String, enum: ["Male", "Female", "Others"] },
    createdAt: Number,
    updatedAt: Number
}, { timestamps: true });

// Create User Model
const Usermodel = mongoose.model("users", UserSchema);

module.exports = Usermodel;