const fs=require("fs");
const fileName="mca.txt";
const data=`
name:"Kavin",
dept:"MCA"
`; 


fs.writeFile("filename","",function(err)
{
    if(err){
        console.log(err);
    }
    else{
        console.log("File created sucessfully");
    }

    fs.readFile(fileName,(err,content)=>{ 
if(err)
{
console.log(err);
}
else{
    console.log(data);
}
    
});
});
