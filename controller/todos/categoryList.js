const TodoCategoryModel = require('../../model/todoCategoryModel');
const categorylist = async (req, res)=>{
try{
  const category = await TodoCategoryModel.find({}).sort({createdAt: 1});
   if (category.length === 0){
     return res.json({
     msg: "No todos found",
     status: false
  });
}
   return res.json({
    msg: "Categorylist fetched successfully",
    status: true,
    data: category
  });
   }catch(err){
    console.log(err);
    return res.json({
     msg: "Todo list can not be fetched",
     status: false
  });
  }
};

module.exports = categorylist;
