console.log("Radhe Radhe sabhi ko❤️❤️")
const express=require('express');
const app=express();

app.use("/test",(req,res)=>{
    res.send("halkuu ree");
})

app.listen((4200),()=>{
    console.log("halkuu ree coder ban gya ree")
})