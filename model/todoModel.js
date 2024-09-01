const mongoose = require('mongoose')
// Define User Schema
const todoSchema = new mongoose.Schema({
    email: String,
    title: String,
    description: String,
    createdAt: Number,
    updatedAt: Number
}, {timestamps: true});

const models = mongoose.model("todos", todoSchema);

module.exports = models;
