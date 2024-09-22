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



    /*const express = require('express');
    const cloudinary = require('cloudinary').v2;
    const { CloudinaryStorage } = require('multer-storage-cloudinary');
    const multer = require('multer');
    const dotenv = require('dotenv');
    
    // Load environment variables from .env file
    dotenv.config();
    
    const app = express();
    
    // Configure Cloudinary
    cloudinary.config({
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_API_SECRET
    });
    
    // Set up Cloudinary storage for Multer
    const storage = new CloudinaryStorage({
        cloudinary: cloudinary,
        params: {
            folder: 'uploads', // Cloudinary folder name
            allowed_formats: ['jpg', 'png'], // Allowed file formats
        }
    });
    
    const upload = multer({ storage: storage });
    
    app.use(express.json()); // To parse JSON request bodies
    
    // Test route
    app.get('/', (req, res) => {
        res.send('Hello World');
    });
    
    // API to upload image from URL
    app.post('/api/upload', async (req, res) => {
        const imageUrl = req.body.imageUrl; // Get image URL from request body
    
        try {
            // Upload the image using the URL
            const result = await cloudinary.uploader.upload(imageUrl, {
                folder: 'uploads' // Specify folder in Cloudinary
            });
    
            res.json({ message: 'Uploaded successfully', data: result });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Upload failed', error: error.message });
        }
    });
    
    // Start the server
    const port = 2000;
    app.listen(port, () => {
        console.log(`Server running on port ${port}`);
    });
    

const startDate = null;
const endDate = null;
if(startDate){
    startDate = new Date(start);
}
if(endDate){
    const endDate = new Date(end);
}
if(startDate && endDate && startDate>endDate){
    return res.json({ msg:"startDate cannot come after endDate", status: false});
}
*/



/*const Todomodel = require('../../model/todoModel');

const Todolist = async (req, res) =>{
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




