const EventEmmiter = require('events')

const customEmmiter = new EventEmmiter()

customEmmiter.on('response' , (name ,id)=>{
    console.log(`data recieved ${name} of id : ${id}`);
})
customEmmiter.on('response' , ()=>{
    console.log(`some other logic here`);
})
customEmmiter.emit('response' , 'john' , 24)