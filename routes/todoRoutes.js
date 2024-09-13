const express = require('express');
const router = express.Router();

const todoadd = require('../controller/todos/todoadd');
const tododetail = require('../controller/todos/tododetail');
const auth = require('../middleWare/authentication');
const updatetodo = require('../controller/todos/updatetodo');
const deletetodo = require('../controller/todos/deleteTodo');
const todolist = require('../controller/todos/todolist');
const statusUpdated = require('../controller/todos/statusUpdate');


router.post("/todoadd", auth, todoadd);
router.get("/todolist", auth, todolist);
router.post("/statusUpdate", auth, statusUpdated);

router.get('/tododetails', auth, tododetail);
router.delete("/tododelete", auth, deletetodo);
router.delete("/updateTodo", auth, updatetodo);



module.exports = router;

