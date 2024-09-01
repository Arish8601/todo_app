/*const Usermodel = require('../../model/userModel');

const registerUser = async (req, res) => {
    try {
        // Check for missing parameters
if (!req.body.username || !req.body.email || !req.body.age || !req.body.password || !req.body.gender) {
            return res.json({
                msg: "Missing parameter", status: false
            });
        }

        // Check if the email already exists
       const findUser = await Usermodel.findOne({email});
        if (findUser) {
            return res.json({
                msg: "Email ID already exists", status: false
           });
        }
        let saveData = await new Usermodel({
            name: req.body.username,
            age: req.body.age,
            email: req.body.email,
            password: req.body.password,
            gender: req.body.gender
        }).save();

        return res.json({
            msg: "User registered successfully", status: true,
            data: saveData
        });
    } catch (error) {
        console.log(error.message);
        return res.json({
            msg: error.message, status: false
        });
    }
};

module.exports = registerUser;
*/

const Usermodel = require('../../model/userModel');

const registerUser = async (req, res) => {
    try {
        // Extract data from request body
        const {username, email, age, password, gender} = req.body;
        if (!username || !email || !age || !password || !gender) {
            return res.json({
                msg: "Missing parameter",
                status: false
            });
        }
        const existingUser = await Usermodel.findOne({email});
        if (existingUser) {
            return res.json({
                msg: "Email ID already exists",
                status: false
            });
        }
    const newUser = await new Usermodel({
        name: req.body.username,      
        age: req.body.age,             
        email: req.body.email,         
        password: req.body.password,   
        gender: req.body.gender        
});

        const savedUser = await newUser.save();
        return res.json({
            msg: "User registered successfully",
            status: true,
            data: savedUser
        });
    } catch (error) {
        console.error(error.message);
        return res.json({
            msg: "An error occurred:",
            status: false
        });
    }
};

module.exports = registerUser;
