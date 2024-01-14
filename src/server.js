const express = require('express')

const app = express()

const hostname = 'localhost'
const port = 8017

app.get('/', function (req,res) {
    res.send('<h1>Hello world Nodejs Trungquandev</h1>')
})

app.listen(port, hostname, () => {
    console.log(`Hello world Trungquandev at http://${hostname}:${port}/`)
})