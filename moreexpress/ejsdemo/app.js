var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var request = require("request");

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.set("view engine","ejs");
var friends =["aaa","bbb","ccc"];

app.get("/",function(req,res){
    res.render("home");
});
app.get("/results",function(req,res){
    var query= req.query.search;
    var url ="http://www.omdbapi.com/?s="+query +"&apikey=44cf7dd5";
   request(url,function( error ,response, body){
        if(!error && response.statusCode==200){
            var data= JSON.parse(body)
            res.render("results",{data : data});
        }
    console.log("requesting results");
   }); 
});

app.post("/addfriend",function(req,res){
    //console.log("post route");
    var newFriend = req.body.newfriend;
    friends.push(newFriend);
    res.redirect("/friends");
});
app.get("/friends",function(req,res){
    res.render("friends",{friends: friends});
});
app.get("/love/:thing",function(req,res){
    var thing=req.params.thing;
    res.render("love",{thingvar:thing});
});

app.get("/posts",function(req,res){
    var posts=[
        {title :"post 1",author:"hella"},
        {title :"post 2",author:"odin"}
    ];
    res.render("posts", {posts:posts});
});

app.listen(3000,function(){
    console.log("server is listening");
});