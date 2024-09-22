const express = require('express');
const multer = require('multer');
const app = express();

const storage = multer.diskStorage({
    destination: function (req, file, cb){
      cb(null, 'uploads/')
    },
    filename: function (req, file, cb){
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix)
    }
  })
  
const upload = multer({storage: storage})

app.get('/', (req, res) =>{
    res.send('Hello World');
});

app.post('/api/upload', upload.single('file'),(req, res)=>{
    console.log(req.file)
    res.send('Uploaded successfully');
});

const port = 2000;
app.listen(port, ()=> console.log(`Server running on port ${port}`));







