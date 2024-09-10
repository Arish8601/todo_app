const Todomodel = require('../../model/todoModel');


const updateTodo = async (req, res) => {
    try {
        if (!req.body.title) {
            return res.json({
                msg: "Missing fields",
                status: false
            });
        }
        const existingstatus = await Todomodel.findOne({title: req.body.title});

        if (existingstatus){
            const updatedTodo = await Todomodel.findOneAndUpdate(
             {title: req.body.title}, {$set:{description: req.body.description}}, {new: true});
             return res.json({
                msg: "Todo status updated successfully",
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
