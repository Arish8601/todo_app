const Todomodel = require('../../model/todoModel');

const Todolist= async (req, res) => {
    try {
        const todos = await Todomodel.find();
        res.json({
            msg: "Todo list get successfully",
            status: true,
            data: todos
        });
    } catch (err) {
        console.log(err.message);
        res.json({
        });
    }
};

module.exports = Todolist;