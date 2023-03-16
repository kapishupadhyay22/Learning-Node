const {readFileSync , writeFileSync} = require('fs')

const f = readFileSync('./folder/first.txt', 'utf8')

const s = readFileSync('./folder/second.txt', 'utf8')

//console.log(f,s);
writeFileSync('./folder/new.txt', `here is the result ${f} , ${s}` ,{flag: 'a'});     //flag is for appending