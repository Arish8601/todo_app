 /*const Todomodel = require('../../model/todoModel');

 const addtodo = async (req, res) =>{
    try {
        const title = req.body.title;
        if (!title){
             return res.json({
             msg:"title not found",
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
    description: req.body.description,
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
 






 const Todomodel = require('../../model/todoModel');
 const { runMiddleware, handleUpload, upload } = require('../../middleWare/fileUpload');
 const validateTodo = require('../../middleWare/addTodoValidation');

const addtodoUploadImg = async (req, res) => {
    try {
        if (!req.file) {
            return res.json({
                msg: "Missing parameter",
                status: false
         });
       }
        const b64 = Buffer.from(req.file.buffer).toString("base64");
        let dataURI = "data:" + req.file.mimetype + ";base64," + b64;
        const fileData = await handleUpload(dataURI);
        const fileUrl = fileData.url;

        const title = req.body.title;
        if (!title){
            return res.json({
                msg: "Title not found",
                status: false
         });
     }
        const existingTodo = await Todomodel.findOne({title});
        if (existingTodo){
            return res.json({
                msg: "Title already exists",
                status: true,
                data: existingTodo
         });
        }
        var categoryId = Math.floor(Math.random() * 1000000000);
        const Todo = await new Todomodel({
            email: req.user.email,
            title: req.body.title,
            description: req.body.description,
            status: req.body.status,
         categoryName: req.body.categoryName,
         categoryId: categoryId,
            image: fileUrl 
        });
        await Todo.save();
         return res.json({
            msg:"Data added successfully",
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

module.exports = addtodoUploadImg;




//Todoadd DB me And Category DB me same categoryName ka user nii hona chiye and categoryId of both DB must be same

/*const todoModel = require('../../model/todoModel');
const TodoCategoryModel = require('../../model/todoCategoryModel');
const {runMiddleware, handleUpload, upload} = require('../../middleWare/fileUpload');


 const addtodo = async (req, res) =>{
    try {
        if(!req.file){
            return res.json({
                msg: "Missing parameter",
                status: false
            });
        };

        const b64 = Buffer.from(req.file.buffer).toString("base64");
        let dataURI = "data:" + req.file.mimetype + ";base64," + b64;
        const fileData = await handleUpload(dataURI);
        var fileUrl = fileData.url;

        const category = await TodoCategoryModel.findOne({
            email: req.user.email, 
            categoryName:req.body.categoryName,
          });

          if(!category){
            return res.json({msg:"category does not exist", status: false});
          }
          const existingTodo = await todoModel.findOne({email: req.user.email,
            title: req.body.title,
          });
          
      
          if (existingTodo){
            return res.json({
              msg: "Todo with this title name already exists",
              status: false,
            });
         }

        var todos = await new todoModel({
         email: req.user.email,
         title: req.body.title,
         description: req.body.description,
         status: req.body.status,
         categoryName: req.body.categoryName,
         categoryId: category.categoryId,
         image: fileUrl

    }).save();

   
    
     return res.json({
       msg: "Data added successfully",
       status: true,
       data: todos// means jo jo keys denge wo wo data postman pr ayega or display hoga
  });
   
     }catch (err) {
       console.log(err.message);
        return res.json({
          msg: err.message,
          status: false
     });
  }
};

     module.exports = addtodo;
     */
     
     

     