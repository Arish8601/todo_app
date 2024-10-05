/*const Todomodel = require('../../model/todoModel');

const Todolist = async (req, res) => {
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
        if (todos.length === 0){
            return res.json({
              msg: "No todos found between the provided dates",
              status: false,
            });
          }    

        const arr = [];
        todos.forEach(todo =>{
          const capDesc = {id:todo.id, email:todo.email, title:todo.title, description: todo.description.toUpperCase(), 
            status:todo.status}
          arr.push(capDesc)
        });
        
        const arr = todos.map(todo =>{
             return {id:todo.id, email:todo.email, title:todo.title, 
                description: todo.description.toUpperCase(), 
              status:todo.status}
    });
    
    
             
          return res.json({
            msg: "Todo list get successfully",//Todo list get successfully by the status
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
*/



//Date Filter
/*const Todomodel = require('../../model/todoModel');
const Todolist = async (req, res)=>{
  try{
    const {startDate, endDate} = req.body;
      if(startDate && endDate){
    var todos = await Todomodel.find({
      createdAt: {$gte: startDate, $lte: endDate},
    });
    return res.json({
        msg: "List of todos fetched successfully by Date",
        status: true,
        data: todos, 
      });
    }else{
     todos = await Todomodel.find({});
}
    if (todos.length === 0){
      return res.json({
        msg: "No todos found",
        status: false,
      });
    }
   return res.json({
    msg: "Todolist fetched successfully",
    status: true,
    data: todos, 
  });
}
  catch (err){
    console.log(err);
    return res.json({
      msg: "Unable to fetch todos",
      status: false,
    });
  }
};

module.exports = Todolist;
*/


//PAGINATION concept
const todomodel = require('../../model/todoModel');

const todolist = async (req, res)=>{
try {
  const page = req.body.page * 1 
  const limit = req.body.limit * 1 
  const skip = (page - 1) * limit; 

  const todos = await todomodel.find({})
     .skip(skip)
     .limit(limit);

     if (todos.length === 0){
     return res.json({
       msg: "No todos found",
       status: false,
   });
 }
  const totalTodos = await todomodel.countDocuments({});
  const totalPages = parseInt(totalTodos / limit);
   return res.json({
    msg: "Todo list fetched successfully with pagination",
   status: true,
    data: todos,
    pagination:{
    currentPage: page,
    totalPages: totalPages,
    totalItems: totalTodos,
    itemsPerPage: limit
    }
 });

  }catch (err){
    console.log(err);
    return res.json({
     msg: "Todo list not able to fetched",
     status: false
   });
 }
};

module.exports = todolist;

