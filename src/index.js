const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const requestIp = require('request-ip');

const app = express()
const port = 5000
app.use(cors())
app.use(bodyParser.json())
app.use(requestIp.mw())

app.get('/', (req, res) =>{
     return res.send("hola")
})

app.get('/api/ip', (req, res) =>{
    const requestIp = req.clientIp;
    console.log("request ",req)
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    console.log("ip ",ip);
    console.log("requestIp ",requestIp);
    res.status(201).json({ip:ip,requestIp:requestIp});
})

http.listen((process.env.PORT || 5000), function(){
  console.log('listening on *:5000');
});