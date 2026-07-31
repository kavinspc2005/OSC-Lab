const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


mongoose.connect("mongodb://127.0.0.1:27017/EmployeeDB")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));


const employeeSchema = new mongoose.Schema({
    empid: String,
    name: String,
    department: String
});


const Employee = mongoose.model("Employee", employeeSchema);


app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.post("/add", async (req, res) => {

    try {

        await Employee.create({
            empid: req.body.empid,
            name: req.body.name,
            department: req.body.department
        });

        res.send(`
        <script>
            alert("Employee Submitted Successfully");
            window.location.href="/view";
        </script>
        `);

    } catch (err) {

        console.log(err);
        res.send("Error");

    }

});


app.get("/view", async (req, res) => {

    try {

        const employee = await Employee.find();

        let result = `
        <!DOCTYPE html>
        <html>
        <head>

        <title>Employee Details</title>

        <style>

        table{
            border-collapse:collapse;
            margin:auto;
        }

        th,td{
            padding:10px;
            text-align:center;
        }

        h2{
            text-align:center;
        }

        </style>

        </head>

        <body>

        <h2>Employee Details</h2>

        <table border="1">

        <tr>

        <th>Employee ID</th>
        <th>Name</th>
        <th>Department</th>
        <th>Action</th>

        </tr>
        `;

        employee.forEach((emp) => {

            result += `
            <tr>

            <td>${emp.empid}</td>
            <td>${emp.name}</td>
            <td>${emp.department}</td>

            <td>

            <a href="/delete/${emp._id}">
            Delete
            </a>

            </td>

            </tr>
            `;

        });

        result += `
        </table>

        <br>

        <center>

        <a href="/">Add New Employee</a>

        </center>

        </body>

        </html>
        `;

        res.send(result);

    }

    catch(err){

        console.log(err);

        res.send("Error");

    }

});


app.get("/delete/:id", async (req, res) => {

    try {

        await Employee.findByIdAndDelete(req.params.id);

        res.redirect("/view");

    }

    catch(err){

        console.log(err);

        res.send("Delete Error");

    }

});


app.listen(3000, () => {

    console.log("Server Running at http://localhost:3000");

});

