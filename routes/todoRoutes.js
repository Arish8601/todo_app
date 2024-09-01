const express = require('express');
const router = express.Router();

const todoadd = require('../controller/todos/todoadd');
const tododetail = require('../controller/todos/tododetail');
const {auth} = require('../middleWare/authentication');
const updatetodo = require('../controller/todos/updatetodo');
const deletetodo= require('../controller/todos/deleteTodo');
const todolist = require('../controller/todos/todolist');


router.post("/todoadd", auth, todoadd);
//router.post("/todoadd", todoadd);
router.get("/todolist", todolist);

router.get('/tododetails', tododetail);
router.delete("/tododelete", deletetodo);
router.delete("/updateTodo", updatetodo);



module.exports = router;

