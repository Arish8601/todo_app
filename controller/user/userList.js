

const Usermodel = require('../../model/userModel');

const allUser = async (req, res) => {
    try {
        // Get list of all users from the database
        
        //const list = await Usermodel.find({age:{$lt:25}});
        

         // Check if users exist
           if (list.length === 0) {
            return res.json({
                msg: "No users found",
                status: false
            });
        }

        // Return the list of users
        return res.json({
            msg: "List of users get successfully",
            status: true,
            data: list
        });
    } catch (error) {
        console.error(error.message);
        return res.json({
            msg: "error occurred",
            status: false
        });
        
      };
    }

module.exports = allUser;

