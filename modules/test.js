
let users = require("fs").readFileSync(__dirname+"/users.json").toString();
users = JSON.parse(users);
console.log(users);