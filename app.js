//Modules

const sayHi = require("./5-secondModule");          //recieving sayHi function
const Names = require("./4-Names")       //recieving names 

const data = require("./6-alternative-flavour")

console.log(data);
//console.log(Names);
sayHi(Names.john)
sayHi(Names.peter)

