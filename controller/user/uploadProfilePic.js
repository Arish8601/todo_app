const UserModel = require('../../model/userModel');
const { runMiddleware, handleUpload, upload } = require('../../middleWare/fileUpload')


const uploadProductPicture = async (req, res) => {
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
        const updateUser = await UserModel.findOneAndUpdate(
            {email: req.user.email},          
            {$set:{image: fileUrl}},  
            {new: true}                   
        );
        
        if (!updateUser){
            return res.json({
                msg:"User not found",
                status:false
            });
        };
        return res.json({
            msg: "Profile picture updated successfully",
            status: true,
            data:updateUser 
        });


    } catch(e) {
        return res.json({
            msg: e.message, status: false
        })
    }
}
module.exports = uploadProductPicture;