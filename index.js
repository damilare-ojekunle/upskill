const express = require("express");
const app = express();
const db = require('./config/database');

const Route = require('./routes/routes-user');
const bodyParser = require('body-parser');


app.get("/", (req, res) => {
    res.send(" welocome ")
});


app.use('/api/v1', Route);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//app.use(hanserror);


app.listen(3000, function (req, res) {
    console.log("listening on pot 3000");

})