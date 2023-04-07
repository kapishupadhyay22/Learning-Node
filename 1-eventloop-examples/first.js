const http = require('http')

const server = http.createServer((req,res) => {
    console.log('this is the request')
    res.end('hello world')
})

server.listen(5001 , ()=>{
    console.log('listening to port');
})