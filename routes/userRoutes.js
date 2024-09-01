const router = require('express').Router();
const {auth} = require('../middleWare/authentication');
const getuser = require('../controller/user/getUser');
const register = require('../controller/user/registerUser');
const list = require('../controller/user/userList');
const login = require('../controller/user/login');


router.get('/getUser', auth, getuser);
router.post("/registerUser", register);
router.get("/userList", list);
router.post("/login", login);


module.exports = router;