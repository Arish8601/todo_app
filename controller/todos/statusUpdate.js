const Todomodel = require('../../model/todoModel');

const updatedstatus = async (req, res) => {
    try {
        const {title} = req.body;
        
        if (!title){
            return res.json({
                msg: "Missing fields",
                status: false
            });
        }
        const stts = req.body.status||"pending"
        const updateStatus = await Todomodel.findOneAndUpdate(
            {title: title}, {$set: {status: stts}}, {new: true});

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
