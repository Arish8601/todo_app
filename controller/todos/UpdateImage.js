const todoModel = require('../../model/todoModel');
const { runMiddleware, handleUpload, upload } = require('../../middleWare/fileUpload')


const uploadProPicture = async (req, res) => {
    try {
        if(!req.file) {
            return res.json({
                msg: "Missing parameter"
            })
        };
        //const myUploadMiddleware = upload.single("profilePicture");
        //await runMiddleware(req, res, myUploadMiddleware);
        const b64 = Buffer.from(req.file.buffer).toString("base64");
        let dataURI = "data:" + req.file.mimetype + ";base64," + b64;
        const fileData = await handleUpload(dataURI);
        var fileUrl = fileData.url;
        const updatetodo = await todoModel.findOneAndUpdate(
            {email: req.user.email, title: req.body.title},          
            {$set:{image: fileUrl}},  
            {new: true}                   
        );
        
        if (!updatetodo){
            return res.json({
                msg:"User not found",
                status:false
            });
        };
        return res.json({
            msg: "Profile picture updated successfully",
            status: true,
            data:updatetodo
        });


    } catch(e) {
        return res.json({
            msg: e.message, status: false
        })
    }
}
module.exports = uploadProPicture;