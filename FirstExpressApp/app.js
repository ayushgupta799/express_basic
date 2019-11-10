var express = require("express");
var app = express();

app.get("/",function(req,res){
    res.send("Hii therne!!");
});
app.get("/speak/:animal",function(req,res){
    var animal =req.params.animal.toLowerCase();
    var sounds ={
        pig:"oink",
        cow:"moo",
        dog: "Woof Woof!",
        cat :"..."
    }
    var sound=sounds[animal];
    res.send("The "+animal+" says "+sound);
});
app.get("/repeat/:message/:times",function(req,res){
    var message =req.params.message;
    var times =Number(req.params.times);
    var result="";
    for(var i=0;i<times;i++){
        result+=message+" ";
    }
    res.send(result);
});
app.get("*",function(req,res){
    res.send("Sorry there!!");
});
app.listen(3000,function(){
    console.log("on port 3000");
});