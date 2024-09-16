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

        /*const arr = [];
        todos.forEach(todo =>{
          const capDesc = {id:todo.id, email:todo.email, title:todo.title, description: todo.description.toUpperCase(), 
            status:todo.status}
          arr.push(capDesc)
        });
        */
        const arr = todos.map(todo =>{
             return {id:todo.id, email:todo.email, title:todo.title, 
                description: todo.description.toUpperCase(), 
              status:todo.status}
    });
    
             
          return res.json({
            msg: "Todo list get successfully by the status",
            status: true,
            data: arr
        });
    } catch (err) {
        console.log(err);
        return res.json({msg:"Todo list not able to fetch", status: false
        });
    }
};

module.exports = Todolist;



