const Usermodel = require('../../model/userModel');
const bcrypt = require('bcrypt');

const registerUser = async (req, res) => {
    try {
        // Extract data from request body
        const {username, email, age, password, gender} = req.body;
        if (!username||!email||!age||!password||!gender) {
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
        //const saltRound = 10;
        //const hashPassword = await bcrypt.hash(password, saltRound);
        const newUser = await new Usermodel({
        name: req.body.username,      
        age: req.body.age,             
        email: req.body.email,         
        //password: hashPassword,  
        password: req.body.password, 
        gender: req.body.gender  
        .save()   
  });
 
        return res.json({
            msg: "User registered successfully",
            status: true,
            data: newUser
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

