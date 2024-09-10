const express = require('express');
const app = express();
const port = 5000;
const bcrypt = require('bcrypt');


app.get("/", function (req, res){
    
    bcrypt.genSalt(10, function(err, salt) {  //saltround usally hm 10 rkhte h by default
        bcrypt.hash("Arish@1234", salt, function(err, hash){ //Password ko hash or ecrypted krdega this salt
            console.log(hash);// This hash convert ur password into the ecrypted form..OR scrambled string.
            console.log(salt);// This salt used to genrate only random string or scrambled string.....
            
        });
    });
})
app.listen(port, () =>{
     console.log("server running successfully on port 5000");
});
 