const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes')
const port = 3001;
const app = express();
app.use(express.json()); // For sending data through the body

app.use('/user', userRoutes);

// Connect to MongoDB and start the server
mongoose.connect('mongodb://localhost:27017/crudapp')
    .then(() => console.log("MongoDB connected successfully:)"))
    .catch(error => console.log(error));

app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});
