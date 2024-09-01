const Usermodel = require('../../models/userModel');

const addtodo = async (req, res) => {
    try {
        const todo = await Usermodel.find({});
            if (todo > 0) {
            return res.json({
                msg: "Users found",
                status: true,
                data: todo
            });
        }
            let save = await new Usermodel({
                email:req.body.email,
                title:req.body.title,
                description:req.body.description,
                createdAt:req.body.createdAt,
                updatedAt:req.body.updatedAt, 
            }, {timestamp: true})
             .save();
        return res.json({
            msg: "User registered successfully",
            status: true,
            data: save
        });
    } catch (error){
        console.log(error.message);
        return res.json({
            msg: error.message,
            status: false
        });
    }
};

module.exports = addtodo;
