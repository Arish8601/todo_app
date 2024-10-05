const express = require('express');
const router = express.Router();

const addtodoCategory = require('../controller/todos/addtodoCategory');
const auth = require('../middleWare/authentication');
const categoryList = require('../controller/todos/CategoryList');
const categoryDetails = require('../controller/todos/categoryDetails');
const categoryDel = require('../controller/todos/deleteCategory');




router.get('/Categorylist', auth, categoryList);
router.get('/Categorydetail', auth, categoryDetails);
router.post('/addtodoCategory', auth, addtodoCategory);
router.post('/deleteCategory', auth, categoryDel);


module.exports = router;