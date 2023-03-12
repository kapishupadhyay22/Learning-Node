//Modules

const sayHi = require("./5-secondModule");          //recieving sayHi function
const Names = require("./4-Names")       //recieving names 

const data = require("./6-alternative-flavour")
//import name from "./6-alternative-flavour";

require(`./7-mind-grenade`)
console.log(data);
//console.log(Names);
sayHi(Names.john)
sayHi(Names.peter)
sayHi(data.singlePerson.name);



