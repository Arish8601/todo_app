const categoryModel = require('../../model/todoCategoryModel');

const removeCategory = async (req, res) => {
    try {
        if (!req.user.email) {
            return res.json({
                msg: "Email not found",
                status: false
            });
        }
        
        const deleteCategory = await categoryModel.findOneAndDelete({email: req.user.email});
        
        if (deleteCategory){  
            return res.json({
                msg: "CategoryDetail removed successfully",
                status: true,
                data: deleteCategory
            });
        }

        return res.json({
            msg: "todoCategory not found",
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

module.exports = removeCategory;
