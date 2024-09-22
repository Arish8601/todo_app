const router = require('express').Router();
const auth = require('../middleWare/authentication');
const getuser = require('../controller/user/getUser');
const register = require('../controller/user/registerUser');
const userlist = require('../controller/user/userList');
const login = require('../controller/user/login');
const edituser = require('../controller/user/updateUser');
const UpdatePass = require('../controller/user/updatePass');
const uploadProfilePic = require('../controller/user/uploadProfilePic');
const { upload } = require('../middleWare/fileUpload')


router.get('/getUser', auth, getuser);
router.post('/uploadProfilePic', auth, upload.single("profilePicture"), uploadProfilePic);
router.post("/registerUser", register);
router.get("/userList", auth, userlist);
router.post("/login", login);
router.post("/updateUser", auth, edituser);
router.post("/updatePassword", auth, UpdatePass);


module.exports = router;