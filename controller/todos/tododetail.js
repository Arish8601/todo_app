const Todomodel = require('../../model/todoModel');

const tododetail = async (req, res) => {
    try {
        const title = req.body.title;
        if(!title){
            return res.json({
                msg: "title is missing",
                status: false
            });
        }
          const todo = await Todomodel.findOne({title});
            if (!todo) {
            return res.json({
                msg: "Todo item not found",
                status: false
            });
        } 
        return res.json({
            msg: "Todo item get successfully",
            status: true,
            data: todo
        });
    } catch (error) {
        console.error(error.message);
        return res.json({
            msg: error.message,
            status: false
        });
    }
};

module.exports = tododetail;
