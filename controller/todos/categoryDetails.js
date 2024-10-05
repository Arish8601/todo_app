const TodoCategoryModel = require('../../model/todoCategoryModel');
const categoryDetails = async (req, res)=>{
 try{
  const categoryId = req.body.categoryId;
  if(!categoryId){
    return res.json({msg:"Missing parameter", status: false});
  }  
  const category = await TodoCategoryModel.findOne({categoryId})
   if (!category){
     return res.json({
     msg: "Details not found",
     status: false
  });
}
   return res.json({
    msg: "Category detail fetched successfully",
    status: true,
    data: category
  });
   }catch(err){
    console.log(err);
    return res.json({
     msg: "categorylist can not be fetched",
     status: false
  });
  }
};

module.exports = categoryDetails;
