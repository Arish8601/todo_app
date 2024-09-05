/*const Usermodel = require('../../model/userModel');

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

//module.exports = registerUser;

module.exports = (req, res) => {
    res.send('User registered');
};
*/

const UserModel = require('../../model/userModel');

const registerUser = async (req, res) => {
    try {
        // Extract data from request body
        const { username, email, age, password, gender } = req.body;
        
        // Validate request data
        if (!username || !email || !age || !password || !gender) {
            return res.json({
                msg: "Missing parameter",
                status: false
            });
        }
        
        // Check if the user already exists
        const existingUser = await UserModel.findOne({ email });
        if (existingUser) {
            return res.json({
                msg: "Email ID already exists",
                status: false
            });
        }

        // Create a new user instance
        const newUser = new UserModel({
            name: username,   // Corrected property name to match the schema
            age: age,
            email: email,
            password: password,
            gender: gender
        });

        // Save the new user to the database
        const savedUser = await newUser.save();
        return res.json({
            msg: "User registered successfully",
            status: true,
            data: savedUser
        });
    } catch (error) {
        console.error(error.message);
        return res.json({
            msg: "An error occurred",
            status: false
        });
    }
};

//module.exports = registerUser;
module.exports = (req, res) => {
    res.send('User registered');
};


