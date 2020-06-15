const express = require('express')
const app = express()
const port = 8088

app.use('/assets', express.static('assets'))
app.get('/', (req, res)=>{
    res.sendFile(`${__dirname}/index.html`)
    req.url = '/'
})
app.get('/p1', (req, res)=>{
    res.sendFile(`${__dirname}/p1.html`)
    req.url = '/'
})
app.get('/p2', (req, res)=>{
    res.sendFile(`${__dirname}/p2.html`)
    req.url = '/'
})

app.listen(port)

console.log("server listening on http://localhost:"+ port)