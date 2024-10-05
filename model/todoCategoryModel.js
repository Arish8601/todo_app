const mongoose = require('mongoose')
const TodoCategorySchema = new mongoose.Schema({
    email: String,
    description: String,
    categoryName:{type:String, enum: ["work", "personal"]},
    categoryId: Number,
    createdAt: Number,
    updatedAt: Number,
}, {timestamps: true});

const TodoCategory = mongoose.model("todoCategory", TodoCategorySchema);

module.exports = TodoCategory;
