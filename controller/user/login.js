const Usermodel = require('../../model/userModel');
const jwt = require('jsonwebtoken');
const secret = "mysecret";

// Login API
const login = async (req, res) => {
    try {
        const {email, password} = req.body;

        // Check if both email and password are provided
        if (!email||!password) {
            return res.json({
                msg: "Missing parameter",
                status: false
            });
        }

        // Find the user through email
        const user = await Usermodel.findOne({email});

        // If the user is not found and password not macth
        if (!user) {
            return res.json({
                msg: "User not registered",
                status: false
            });
        };
        if(user.password !== password) {
            return res.json({
                msg: "Wrong password",
                status: false
            });
        }
        let users = {
            email: user.email
        }
         // Create a token for the user
        const token = await jwt.sign(users, secret, {expiresIn: '1h'});
         // If the email and password match, return succes.....
        return res.json({
            msg: "Login successful",
            status: true,
            data: user,
            token
        });

    } catch (error) {
        console.log(error.message);
        return res.json({
            msg: "Error occured",
            status: false
        });
    }
};

module.exports = login;

// login.js
/*module.exports = (req, res) => {
    // Logic for user login
    res.send('User logged in');
};
*/


