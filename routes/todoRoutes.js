
const express = require('express');
const router = express.Router();

const todoadd = require('../controller/todos/todoadd');
const tododetail = require('../controller/todos/tododetail');
const auth = require('../middleWare/authentication');
const updatetodo = require('../controller/todos/updatetodo');
const deletetodo = require('../controller/todos/deleteTodo');
const todolist = require('../controller/todos/todolist');
const statusUpdated = require('../controller/todos/statusUpdate');
const todolistDate = require('../controller/todos/todolistWithDateFilter');
const { upload } = require('../middleWare/fileUpload')
const image = require('../controller/todos/UpdateImage');


router.post("/todoadd", auth, todoadd);
router.post('/UpdateImage', auth, upload.single("profilePicture"), image);
router.post("/todolistDateFilter", auth, todolistDate);
router.get("/todolist", auth, todolist);
router.post("/statusUpdate", auth, statusUpdated);

router.get('/tododetails', auth, tododetail);
router.delete("/tododelete", auth, deletetodo);
router.post("/updateTodo", auth, updatetodo);



module.exports = router;



