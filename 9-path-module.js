const path = require(`path`)


console.log(path.sep)

var filepath = path.join('/folder','subfolder','test.txt')

console.log(filepath);

console.log(path.basename(filepath));

const absolutePath = path.resolve(__dirname,'folder','subfolder','test.txt');
console.log(absolutePath);