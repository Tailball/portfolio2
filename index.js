const http = require('http');

const express = require('express');
const app = express();

const log = require('./middleware/logger');

app.use(log);

app.use('/', express.static('client/build'));

const port = process.env.PORT || 5000;
app.listen(port, () => console.log('Server is up and running...'));

const herokuKeepAliveTime = 1800000; // 30min * 60sec * 1000ms
setInterval(() => http.get('http://www.google.be'), herokuKeepAliveTime);