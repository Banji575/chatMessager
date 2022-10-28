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

io.on('connection', (socket) => {
    console.log('a new user just connection')
    socket.on('disconnect', () => {
        console.log('user was disconnected')
    })
})



server.listen(PORT, () => {
    console.log(`Server running on ${PORT} port`)
})

