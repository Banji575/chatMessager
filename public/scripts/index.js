const socket = io()

socket.on('connect', () => {
    console.log('connected to server')
    // socket.emit('createMessage',{
    //     from:"SCH",
    //     text:"Wats going on"
    // })
})
socket.on('disconnect', () => {
    console.log('disconnected from server')
})

socket.on('newMessage', msg => {
    console.log(msg)
})

socket.emit('createMessage', {
    from: "Sergey",
    msg: "hey"
}, (msg)=>{
    console.log(msg)
})