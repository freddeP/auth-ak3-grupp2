const bcrypt = require("bcryptjs");

let email = "fredde@p.se";
let password = "blackfriday";

let hash = bcrypt.hashSync(password,12);

let users = require("fs").readFileSync(__dirname+"/users.json").toString();
users = JSON.parse(users);
// kolla så att användare inte existerar redan
let userExists = users.filter(u=>{
    return u.email == email;
});

if(userExists.length==0)
{
    users.push({email:email,password:hash});

    users = JSON.stringify(users);

    require("fs").writeFileSync(__dirname+"/users.json",users);
    console.log(users);
}
else {console.log("user exists")}
