const mongoose = require('mongoose');
const express = require('express');
const app = express();

const userRoute = require('./routes/userRoutes');
const todoRoutes = require('./routes/todoRoutes');

const port = 3000;
app.use(express.json()); //Get or access data through body

// Use the routes
app.use('/user', userRoute);
app.use('/todos', todoRoutes);

mongoose.connect('mongodb+srv://mdarish948:oe6DR3idKt15jnJq@cluster0.ardub.mongodb.net/todoapp?retryWrites=true&w=majority&appName=Cluster0/todoapp')
    .then(() => console.log("Mongodb connected successfully"))
    .catch(error => console.log(error));

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
