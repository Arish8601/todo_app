const Usermodel = require('../../model/userModel');

const userDetails = async(req, res) => {
    try {
        //
        const email = req.user.email;
            if (!email){
              return res.json({
                msg: "Email parameter is missing",
                status: false
            });
        }

        // Find the user by email
        const user = await Usermodel.findOne({email: email});
        
        if (!user) {
            return res.json({
                msg: "User not found",
                status: false
            });
        }

        // Send successful response 
        return res.json({
            msg: "User fetch successfully",
            status: true,
            data: user
        });

    } catch (error) {
        // Handle errors and send error response
        console.error(error.message);
        return res.json({
            msg: error.message,
            status: false
        });
    }
};


module.exports = userDetails;

