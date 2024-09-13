const Todomodel = require('../../model/todoModel');

const Todolist= async (req, res) => {
    const status = req.query.status;
    if(!status){
        return res.json({
            msg: "status not found",
            status: false
        });
    }
    if(status !== "pending" && status !== "completed"){
            
        return res.json({
            msg: "status is missing",
            status: false
        });
    }
    try{
        const todos = await Todomodel.find({status});
         return res.json({
            msg: "Todo list get successfully by the status",
            status: true,
            data: todos
        });
    } catch (err) {
        console.log(err);
        return res.json({
        });
    }
};

module.exports = Todolist;



