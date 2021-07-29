const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
// const requestIp = require('request-ip');

const app = express()
const port = 5000
app.use(cors())
app.use(bodyParser.json())
// app.use(requestIp.mw())

app.get('/', (req, res) =>{
     return res.send("hola")
})

app.get('/api/ip', (req, res) =>{
    // const requestIp = req.clientIp;
    let ip = req.headers['x-forwarded-for'] || 
    req.connection.remoteAddress || 
    req.socket.remoteAddress || 
    req.connection.socket.remoteAddress;    

    const sep = ip.indexOf(',') > 0 ? ',' : (ip.indexOf(' ') > 0 ? ' ' : '')
    if (sep !== '') {
      ip = ip.split(sep)[0]
    }

    ip = ip === '::1' ? '127.0.0.1' : ip

    res.status(201).json({
        ip: ip, 
    });
})

const PORT = process.env.PORT || 5000
app.listen(PORT)