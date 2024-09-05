const  Usermodel = require('../../model/userModel'); 

const updatedUser = async(req, res)=>{
    try {
        const email = req.user.email;
        if (!email){
            return res.json({
                msg: "Missing email",
                status: false
            });
        }
        const existingUser = await Usermodel.findOne({email:req.user.email});

        if (existingUser) {
            const updatedUser = await Usermodel.findOneAndUpdate(
                {email:req.user.email}, 
                {$set:{
                    name:req.body.name,
                    age:req.body.age,
                    password:req.body.password,
                    gender:req.body.gender 
                }}, 
                {new: true} 
            );
            return res.json({
                msg: "User's detail updated successfully",
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
        return res.json({
            msg: err.message,
            status: false
        });
    }
};

module.exports = updatedUser;








