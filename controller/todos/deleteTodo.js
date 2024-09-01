const Todomodel = require('../../model/todoModel');


const removeTodo = async (req, res) => {
    try {
        if (!req.body.title) {
            return res.json({
                msg: "Missing fields",
                status: false
            });
        }
        const removeTodo = await Todomodel.findOneAndDelete({title:req.body.title});
        if (removeTodo){
            return res.json({
             msg: "todo removed successfully",
             status: true,
             data: removeTodo
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

module.exports = removeTodo;