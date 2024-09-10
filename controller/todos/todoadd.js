const Todomodel = require('../../model/todoModel');


const updateduser = async (req, res) => {
    try {
        const email = req.body.email;
        if (!email) {
            return res.json({
                msg: "Email not found",
                status: false
            });
        }
        const existingTodo = await Todomodel.findOne({email});

        if (existingTodo){
                return res.json({
                    msg: "email already exists",
                    status: true,
                    data: existingTodo
                });
            }
        const Todo = await new Todomodel({
            email: req.body.email,
            title: req.body.title,
            description: req.body.description
        });

        await Todo.save();
        res.json({
            msg: "Data added successfully",
            status: true,
            data: Todo
        });

    } catch (err) {
        console.log(err.message);
        res.json({
            msg: err.message,
            status: false
        });
    }
};

module.exports = updateduser;
