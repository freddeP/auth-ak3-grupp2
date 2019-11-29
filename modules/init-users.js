const bcrypt = require("bcryptjs");

let email = "john@bengtsson.se";
let password = "blackfriday";

let hash = bcrypt.hashSync(password,12);

let users = require("fs").readFileSync(__dirname+"/users.json").toString();
users = JSON.parse(users);

users.push({email:email,password:hash});

users = JSON.stringify(users);

require("fs").writeFileSync(__dirname+"/users.json",users);

