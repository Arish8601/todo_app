 const Todomodel = require('../../model/todoModel');

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
   
   
   

