const express=require('express');
const app=express();
app.use(express.urlencoded({
    extended:true
}));
app.get('/',function(req,res){
    res.sendFile(__dirname+"/index.html");
});

app.post('/view',function(req,res){
    var name=req.body.name;
    var roll=req.body.roll;
    var department=req.body.department;
    res.send("<h1>"+name+"</h1><h1>"+roll+"</h1><h1>"+department+"</h1>");
})

app.listen(3000,function(){
    console.log("server is running");
});
