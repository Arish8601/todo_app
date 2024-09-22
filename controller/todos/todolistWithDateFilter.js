const Todomodel = require('../../model/todoModel');

const dateFilter = async (req, res)=>{
  const {startDate, endDate} = req.body;
  try{
    const todos = await Todomodel.find({
      createdAt: {$gte: new Date(startDate), $lte: new Date(endDate)},
    });
    if (todos.length === 0){
      return res.json({
        msg: "No todos found between the provided dates",
        status: false,
      });
    }
    return res.json({
      msg: "Todos fetched successfully.",
      status: true,
      data: todos, 
    });
  } catch (err) {
    console.log(err);
    return res.json({
      msg: "Unable to fetch todos",
      status: false,
    });
  }
};

module.exports = dateFilter;
