const Usermodel = require('../../model/todoModel');

const updateUser = async (req, res) => {
    try {
        const email = req.user.email;
        if (!email) {
            return res.json({
                msg: "Email not found",
                status: false
            });
          }

        const existingUser = await  Usermodel.findOne({email});
        if (existingUser){
            return res.json({
                msg: "email already exists",
                status: true,
                data: existingTodo
            });
        }
        if (existingUser){
            const updateduser = await Usermodel.findOneAndUpdate(
                {email: req.user.email }, {$set:{
                    name: req.body.name, 
                    age: req.body.age, 
                    password: req.body.password,
                    gender: req.body.gender
                
                  }
                },
                {new: true} 
              );
              
            
                return res.json({
                    msg: "user updated",
                    status: true,
                    data: updateduser
                });
            }

            return res.json({
                msg: "user not found",
                status: false,
            });


    } catch (err) {
        console.log(err);
        res.json({
            msg: err.message,
            status: false
        });
    }
};

module.exports = updateUser;