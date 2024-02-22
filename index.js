const express=require("express");
const app=express();
app.listen(3000,()=>{
    console.log("Server Started On Port 3000")
})


app.get("/",(req,res)=>{
    res.send("This is Port Number 4000")
})