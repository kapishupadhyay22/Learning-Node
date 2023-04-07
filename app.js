const {readFile , writeFile} = require('fs');
const utils = require('util')
const readfilePromise = utils.promisify(readFile)
const writefilePromise = utils.promisify(writeFile)
const getText = (path) =>{
    return new Promise ((resolve,reject)=>{
        readFile(path , 'utf-8' , (err , data)=>{
            if (err){
                reject(err);
            }else {
                resolve(data);
            }
        })
    })
}
const start = async() =>{
    try {
        const first = await readfilePromise('./folder/first.txt' , 'utf8')
        const second = await readfilePromise('./folder/first.txt' , 'utf8')
        await writefilePromise('./folder/writefilepromisemindgrenade.txt' ,
         `THIS IS AWESOME: ${first} ${second}`)
    } catch (error) {
        console.log(error);
    }
}
start();
// getText('./folder/first.txt').then((res)=>{console.log(res)}).catch((err) =>{console.log(err);})