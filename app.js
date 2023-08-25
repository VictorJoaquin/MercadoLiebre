const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");

app.use(express.static(path.join(__dirname, "public")));

app.get("/",function(req,res){
    res.sendFile(path.join(__dirname,"/views/home.html"));
});

app.listen(3000,()=>{
    console.log("Sucess");
});

app.get(["/register"], (req, res) => {
    res.sendFile(path.join(__dirname, "/views/register.html"));
  });
app.get(["/login"], (req, res) => {
    res.sendFile(path.join(__dirname, "/views/login.html"));
});