const mongoose = require('mongoose');
const morgan = require('morgan');
const express = require('express');
const app = express();

app.use(morgan('dev'))

const userRoute = require('./routes/userRoutes');
const todoRoutes = require('./routes/todoRoutes');
const todoCategoryRoutes = require('./routes/todoCategoryRoutes');

const port = 3001;
app.use(express.json()); //Get or access data through body

// Use the routes
app.use('/user', userRoute);
app.use('/todos', todoRoutes);
app.use('/todoCategory', todoCategoryRoutes);  //mdarish948:oe6DR3idKt15jnJq

mongoose.connect('mongodb+srv://mdarish948:oe6DR3idKt15jnJq@cluster0.ardub.mongodb.net/todoapp?retryWrites=true&w=majority&appName=Cluster0')

//mongoose.connect('mongodb://localhost:27017')
   .then(() => console.log("MongoDB connected successfully"))
   .catch(error => console.log(error));

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
