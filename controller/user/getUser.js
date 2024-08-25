const Usermodel = require('../../model/userModel');


const userDetails = async (req, res) => {
    try {
        const email = req.user.email;
        if (!email) {
            return res.json({
                msg: "Email parameter is missing", status: false
            });
        }

        const user = await Usermodel.findOne({ email: email });
        if (!user) {
            return res.json({
                msg: "User not found", status: false
            });
        }

        return res.json({
            msg: "User get successfully", status: true,
            data: user
        });
        
        } catch (error) {
            console.log(error.message);
            return res.json({
                msg: error.message, status: false
            });
        }
    };

module.exports = userDetails