const router = require('express').Router();
const auth = require('../middleWare/authentication');
const getuser = require('../controller/user/getUser');
const register = require('../controller/user/registerUser');
const userlist = require('../controller/user/userList');
const login = require('../controller/user/login');
const edituser = require('../controller/user/updateUser');
const UpdatePass = require('../controller/user/updatePass');


router.get('/getUser', auth, getuser);
router.post("/registerUser", register);
router.get("/userList", userlist);
router.post("/login", login);
router.post("/updateUser", auth, edituser);
router.post("/updatePassword", UpdatePass);


module.exports = router;
