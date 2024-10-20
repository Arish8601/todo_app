 const UserModel = require('../../model/userModel'); 

const updatePassword = async (req, res) => {
    try {
        if (!req.body.email||!req.body.password){
            return res.json({
                msg: "Missing email or password",
                status: false
            });
        }
        const existingUser = await UserModel.findOne({email: req.body.email});

        if (existingUser) {
            const updatedUser = await UserModel.findOneAndUpdate(
                {email: req.body.email}, 
                {$set:{password: req.body.password}}, 
                {new: true}
            );
              return res.json({
                msg: "Password updated successfully",
                status: true,
                user: updatedUser
            });
        } else {
            return res.json({
                msg: "User not found",
                status: false
            });
        }

    } catch (err) {
        console.log(err);
        res.json({
            msg: err.message,
            status: false
        });
    }
};

module.exports = updatePassword;




