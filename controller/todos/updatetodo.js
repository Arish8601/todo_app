const Todomodel = require('../../model/todoModel');


const updateTodo = async (req, res) => {
    try {
        if (!title) {
            return res.json({
                msg: "Missing fields",
                status: false
            });
        }
        const existingstatus = await Todomodel.findOne({title});

        if (existingstatus){
            const updatedTodo = await Todomodel.findOneAndUpdate(
             {title: req.body.title}, {$set:{description: req.body.description}}, {new: true});
             return res.json({
                msg: "Todo updated successfully",
                status: true,
                data: updatedTodo
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

module.exports = updateTodo;
