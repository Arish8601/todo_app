

const Usermodel = require('../../model/userModel');

const allUser = async (req, res) => {
    try {
        // Get list of all users from the database
        const list = await Usermodel.find({});

        // Check if users exist
        if (list.length === 0) {
            return res.json({
                msg: "No users found",
                status: false
            });
        }

        // Return the list of users
        return res.json({
            msg: "List of users retrieved successfully",
            status: true,
            data: list
        });
    } catch (error) {
        console.error(error.message);
        return res.status(500).json({
            msg: "Internal Server Error",
            status: false
        });
    }
};

module.exports = allUser;

