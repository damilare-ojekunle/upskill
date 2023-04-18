require('dotenv').config();
const express = require("express");
const app = express();
const PORT = process.env.PORT;
const usersRoute = require('./routes/user');
const bodyParser = require('body-parser');


app.use(bodyParser.json());
app.use('/api/v1/users', usersRoute);


app.listen(PORT, function (req, res) {
    console.log(`listening on port ${PORT} `);

})