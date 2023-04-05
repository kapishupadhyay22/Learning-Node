const {readFile , writeFile} = require('fs')

console.log('started');
readFile('./folder/first.txt', 'utf8' , (err , result)=> {
    if(err){
        console.log(err);
        return
    }
    const first = result;
    readFile('./folder/second.txt', 'utf8' , (err,result)=>{
        if (err){
            console.log(err);
            return;
        }
        const second = result;
        writeFile('./folder/async-write',`here is the result ${first} , ${second}`,(err , result)=>{
            if(err){
                console.log(err);
                return;
            }
            console.log('done execution');
        })
    })
})
console.log('hey i am the last');