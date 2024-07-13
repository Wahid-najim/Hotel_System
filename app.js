const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

const hotelRoutes = require('./routes/api');

app.use(bodyParser.json());
app.use(express.static('public'));
app.use('/api', hotelRoutes);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

app.get('/booking', (req, res) => {
    res.sendFile(__dirname + '/views/booking.html');
});

app.get('/order', (req, res) => {
    res.sendFile(__dirname + '/views/order.html');
});

app.listen(port, () => {
    console.log(`Hotel Management System app listening at http://localhost:${port}`);
});
