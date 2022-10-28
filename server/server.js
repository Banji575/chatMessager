const path = require('path')
const express = require('express')
const app = express()
const publicPath = path.join(__dirname, '/../public')
const PORT = 3000

app.use(express.static(publicPath))
app.listen(PORT,()=>{
    console.log(`Server running on ${PORT} port`)
})
