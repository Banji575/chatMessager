const path = require('path')
const http = require('http')
const express = require('express')
const socket = require('socket.io')
const app = express()
const server = http.createServer(app)
const publicPath = path.join(__dirname, '/../public')
const PORT = process.env.PORT || 3000
const io = socket(server)
app.use(express.static(publicPath))
const { generateMessage } = require('./utils/message')

io.on('connection', (socket) => {
    console.log('a new user just connection')

    socket.emit('newMessage', {
        from: "Admin",
        msg: "Welcom to the chat app",
        createdAt: new Date().getTime()
    })

    socket.broadcast.emit('newMessage', generateMessage('Admin', 'new user join'))


    socket.on('createMessage', (msg, cb) => {
        socket.broadcast.emit('newMessage', generateMessage(msg.from, msg.msg))
        cb("server go it")
    })

    socket.on('disconnect', () => {
        console.log('user was disconnected')
    })
})



server.listen(PORT, () => {
    console.log(`Server running on ${PORT} port`)
})

