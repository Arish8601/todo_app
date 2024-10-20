const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema({
    email: String,
    title: String,
    description: String,
    status:{type:String, enum: ["pending", "completed"]},
    categoryName: String,  //enum: ["work", "personal"]},
    categoryId:Number,
    startDate: Number,
    endDate: Number,
    image: String,
    //status:{type:String, default: "pending"},
    createdAt: Number,
    updatedAt: Number,
}, {timestamps: true});

const models = mongoose.model("todos", todoSchema);

module.exports = models;












