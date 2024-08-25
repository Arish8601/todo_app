const router = require('express').Router();
const auth = require('../middleWare/authentication')
const getUser = require('../controller/user/getUser');
const regis = require('../controller/user/registerUser');
const list = require('../controller/user/userList');
const login = require('../controller/user/login');



router.get("/getuser", auth, getUser);
router.post("/registerUser", regis);
router.get("/userList", list);
router.post("/login", login);

module.exports = router;