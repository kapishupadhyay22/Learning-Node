const http = require('http');

const server = http.createServer((req,res)=>{
    if (req.url === '/'){
        res.end('Welcome to our home page');
    }
    else if (req.url === '/about'){
        res.end('This is our about page');
    }else {
        res.end (`
        <h1>OOps!!</h1>
        <p>We can't find that page sorry</p>
        <a href = "/">Back to home page</a>
        `);
    }
})


server.listen(5001);