const express = require('express');
const app = express();
app.use(express.urlencoded({
    extended: true
}));
app.get('/', function(req,res)
{
   res.sendFile(__dirname+"/index.html");
});

app.post('/view', function(req,res)
{
    var name = req.body.name;
    var rollno = req.body.rollno;
    var email = req.body.email;
    res.send("<h1>"+name+"</h1><h2>"+rollno+"</h2><h3>"+email+"</h3>");
});

app.listen(3000,function(){
    console.log('Server is running');
})