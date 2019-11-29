const express = require("express");
const bcrypt = require("bcryptjs");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
const auth = require("./modules/auth");
const secret = require("./modules/secret");
const login = require("./modules/login");
const loginForm = require("./modules/login-form");




const app = express();
//Kommer på provet!!!! vad gör följande rad?
app.use(express.urlencoded({extended:false}));
app.use(cookieParser());


app.get("/",function(req,res){
    res.send("My loginScript-projekt");
});

// exempel-route för att hantera inloggade användare...
app.get("/secret",auth,function(req,res){
    res.send("Still logged in...");
});

// två routes för att hantera inloggningsprocessen
app.get("/login",loginForm);
app.post("/login",login);



// kollar om systemet har en angiven port, annars 3700...
const port = process.env.PORT || 3700
app.listen(port, function(){console.log("port:" +port)});