const Todomodel = require('../../model/todoModel');

const updatedstatus = async (req, res) => {
    try {
        const token = req.user.email;
        
        if (!token){
            return res.json({
             msg: "Missing fields",
             status: false
            });
        }
       /* const stts = req.body.status||"pending"
         if(stts !== "pending" && stts !== "completed"){
            return res.json({
                msg: "invalid status value",
                status: false
               });
         }
        const updateStatus = await Todomodel.findOneAndUpdate(
            {title: req.body.title}, {$set: {status: stts}}, {new: true});
    */

     const updateStatus = await Todomodel.findOneAndUpdate(
        {title: req.body.title}, {$set: {status: "completed"}}, {new: true});
        if (!updateStatus) {
            return res.json({
             msg: "Todo not found",
             status: false
            });
       }

        return res.json({
            msg: "Todo status updated successfully",
            status: true,
            data: updateStatus
        });

    } catch (err) {
        console.log(err);
        res.json({
            msg: err.message,
            status: false
        });
    }
};

module.exports = updatedstatus;
