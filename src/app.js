const express = require('express')
const app = express()
const path = require('path')

//middlewares
app.use(express.json())

//routes
app.use(require('./routes/index.routers'))

//static files
app.use(express.static(path.join(__dirname, '../public')))

app.listen(3000)
console.log(`server on port 3000`)