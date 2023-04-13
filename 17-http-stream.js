const http = require('http')
const fs = require('fs')


const server = http.createServer(
    (req,res)=>{
        const fileStream = fs.createReadStream('./folder/big.txt' , 'utf8')
        fileStream.on('open',
            ()=>{
                fileStream.pipe(res)
            }
        )
        fileStream.on('error' , (err) => {
            console.log(err);
        })
    }
)


server.listen(5001)