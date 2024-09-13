('mongodb+srv://mdarish948:oe6DR3idKt15jnJq@cluster0.ardub.mongodb.net/todoapp?retryWrites=true&w=majority&appName=Cluster0/todoapp')

/*const Todomodel = require('../../model/todoModel');

 const addtodo = async (req, res) => {
    try {
        const title = req.body.title;
        if (!title) {
            return res.json({
                msg: "title not found",
                status: false
            });
        }
        const existingTodo = await Todomodel.findOne({title});

        if (existingTodo){
                return res.json({
                    msg: "title already exists",
                    status: true,
                    data: existingTodo
                });
            }
        const Todo = await new Todomodel({
            email:  req.user.email,
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

module.exports = addtodo;
*/



/*const Todomodel = require('../../model/todoModel');

const removeTodo = async (req, res)=>{
    try {
        if (!req.user || !req.user.email){
        return res.json({
          msg: "Email not found",
          status: false
          });
        }
     const removeTodo = await Todomodel.findOneAndDelete({ email: req.user.email });
        
    if (removeTodo) {
        return res.json({
         msg: "Todo removed successfully",
         status: true,
         data: removeTodo
       });
    }
       return res.json({
        msg: "Todo not found",
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
*/


/*const todomodel = require('../../model/todoModel');

const addtodo = async(req, res) =>{
    try{
        const todo = await todomodel.find({});
        if(todo.length > 0){
            return res.json({
                msg: 'Todo added successfully',
                status: true,
                data: todo
            });
        }
        let newTodo = await new todomodel({
            email: req.user.email,
            title: req.body.title,
            description: req.body.description
        });
            const savedTodo = await newTodo.save();
    
             return res.json({
                 msg:"Todo added successfully", 
                 status: true, 
                 data: savedTodo
             });

        }catch(error){
          console.log(error);
          return res.json({
            msg: error.message,
            status: false
          });
          
        }
    };
    module.exports = addtodo;
    */

           

