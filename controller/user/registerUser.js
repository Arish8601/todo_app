const Usermodel = require('../../model/userModel');

const a = async (req, res) => {
    try {
        // Check for missing parameters
if (!req.body.username || !req.body.email || !req.body.age || !req.body.password || !req.body.gender) {
            return res.json({
                msg: "Missing parameter", status: false
            });
        }

        // Check if the email already exists
        const findUser = await Usermodel.find({ email: req.body.email });
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

module.exports = a;