/*const Todomodel = require('../../model/todoModel');

const removeTodo = async (req, res) => {
         const removeTodo = async (req, res) => {
            try {
             if (!req.user.email) {
                 return res.json({
                     msg: "Email not found",
                     status: false
                    });
                }
                const removeTodo = await Todomodel.findOneAndDelete({email: req.user.email});
                if (removeTodo){
                    return res.json({
                     msg: "todo removed successfully",
                     status: true,
                     data: removeTodo
                 });
             }  
             return res.json({
                msg: "todo not found",
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
        const removeTodo = await Todomodel.findOneAndDelete({email: req.user.email});
        if (removeTodo){
            return res.json({
             msg: "todo removed successfully",
             status: true,
             data: removeTodo
         });
     }  
     return res.json({
        msg: "todo not found",
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

const Todomodel = require('../../model/todoModel');

const removeTodo = async (req, res)=>{
    try {
        if (!req.user || !req.user.email){
        return res.json({
          msg: "Email not found",
          status: false
          });
        }
     const removeTodo = await Todomodel.findOneAndDelete({email: req.user.email});
        
    if (removeTodo){
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

} catch (err){
    console.log(err);
     res.json({
      msg: err.message,
      status: false
   });
  }
};

module.exports = removeTodo;

