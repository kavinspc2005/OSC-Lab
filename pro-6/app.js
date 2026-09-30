const express = require('express');

const app = express();

app.use(express.urlencoded({ extended: true }));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.post('/view', function (req, res) {

    const name = req.body.name;
    const rollno = req.body.rollno;
    const email = req.body.email;

    res.send(`
        <h1>Student Details</h1>
        <h2>Name: ${name}</h2>
        <h3>Roll No: ${rollno}</h3>
        <h3>Email: ${email}</h3>
    `);
});

app.listen(3000, function () {
    console.log('Server is running on http://localhost:3000');
});