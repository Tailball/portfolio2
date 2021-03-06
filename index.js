const http = require('http');
const express = require('express');
const app = express();

const log = require('./middleware/logger');
const contact = require('./routes/contact');

app.use(log);
app.use(express.json());
app.use(express.urlencoded( { extended: false }));

app.use('/api/contact', contact);

app.get('/templates', (req, res) => {
  res.send('portfoliocard | colorsplash | longboard | morpheus');
});

app.use('/templates/portfoliocard', express.static('templates/portfolio_card'));
app.use('/templates/colorsplash', express.static('templates/colorsplash'));
app.use('/templates/longboard', express.static('templates/longboardpage'));
app.use('/templates/morpheus', express.static('templates/morpheus'));

app.use('/', express.static('client/build'));

const port = process.env.PORT || 5000;
app.listen(port, () => console.log('Server is up and running...'));


const herokuKeepAliveTime = 500000; // 8.5min * 60sec * 1000ms
setInterval(() => {
  console.log("Keeping alive...");
  http.get("http://jochenpanjaergraphics.herokuapp.com", () => console.log("http get successfull"));
}, herokuKeepAliveTime);