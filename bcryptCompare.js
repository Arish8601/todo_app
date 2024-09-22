
const express = require('express');
const app = express();
const port = 9000;
const bcrypt = require('bcrypt');


app.get("/", function (req, res){
    res.send("Working proprely")
    
    bcrypt.compare("Arish@1234","$2b$10$ZEVOPapZ3LUkEMgI3rpb2uthOnscQAKlLz4lq66y072Ipxk3pxrL6", function(err, result) {
        console.log(result);
                            
    });
});          
                                                   
app.listen(port, () =>{
     console.log("server running successfully")
});
 