const Todomodel = require('../../model/todoModel');


const updateTodo = async (req, res) => {
    try {
        if (!req.body.title) {
            return res.json({
                msg: "Missing fields",
                status: false
            });
        }
        const existingTodo = await Todomodel.findOne({title: req.body.title});

        if (existingTodo){
            const updatedtodo = await Todomodel.findOneAndUpdate(
             {title: req.body.title}, {$set:{description: req.body.description}}, {new: true});
            
                return res.json({
                    msg: "todo updated",
                    status: true,
                    data: updatedtodo
                });
            }
            return res.json({
                msg: "todo not found",
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

module.exports = updateTodo;
