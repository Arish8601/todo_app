const TodoCategoryModel = require('../../model/todoCategoryModel');

 const addtodoCategory = async (req, res) => {

   try{
       var categoryName = req.body.categoryName
        if(!categoryName){
         return res.json({msg:"categoryName is required", status: false});
        }

       var existingCategory = await TodoCategoryModel.findOne({categoryName})
          if(existingCategory){
            return res.json({msg: "categoryName already exists", status: false});
       }
      
        var categoryId = Math.floor(Math.random() * 1000000000);
        var category = await new TodoCategoryModel({
           email:  req.user.email,
           description: req.body.description,
           categoryName: req.body.categoryName,
           categoryId: categoryId
     });
           category.save();

   
    
         return res.json({
           msg: "Data added successfully",
           status: true,
           data: category
           });
   
       }catch (err){
          console.log(err.message);
            res.json({
            msg: err.message,
            status: false
       });
    }
 };

   module.exports = addtodoCategory;
 


