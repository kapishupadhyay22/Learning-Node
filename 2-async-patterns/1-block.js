const http = require('http')

const server = http.createServer((req,res) => {
    if (req.url === '/'){
        res.end('home page')
    }else if (req.url === '/about'){
    //BLOCKING
        for (let i = 0 ; i < 1000 ; i++){
            for (let j = 0 ; j < 1000 ; j++){
            }
        }
        res.end('about page')
    }else {
        res.end('error page')
    }
})

server.listen(5001 ,() =>{
    console.log('listening to port 5001 ... ');
})