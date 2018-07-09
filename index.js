const http = require('http');
const express = require('express');
const app = express();

const log = require('./middleware/logger');
const contact = require('./routes/contact');

app.use(log);
app.use(express.json());
app.use(express.urlencoded());

app.use('/api/contact', contact);
app.use('/', express.static('client/build'));

const port = process.env.PORT || 5000;
app.listen(port, () => console.log('Server is up and running...'));



try {
  console.log("keeping alive...");
  const herokuKeepAliveTime = 1800000; // 30min * 60sec * 1000ms
  setInterval(() => http.get("http://jochenpanjaergraphics.herokuapp.com"), herokuKeepAliveTime);
} catch(exc) {
  console.log(exc.message);
}