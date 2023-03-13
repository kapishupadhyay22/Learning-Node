const os = require('os')

const user = os.userInfo()
console.log(user);

console.log(`the system uptime : ${os.uptime()} seconds`);

const currentOs = {
    type: os.type(),
    release: os.release(),
    Totalmem: os.totalmem(),
    freenMem: os.freemem()
}

console.log(currentOs);
