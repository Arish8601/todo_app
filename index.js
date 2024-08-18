const express = require('express');
const app = express();

app.get('/', (req, res) => {
    let obj = {
        id: 1,
        name: "Arish",
        age: 17
    }
    res.send(obj);
});

app.get('/about', (req, res) => {
    res.send('Hello, this is About Page');
});

const PORT = 4000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

