require('dotenv').config();
const express = require("express");
const app = express();
const PORT = process.env.PORT;
const bodyParser = require('body-parser');
const usersRoute = require('./routes/user');
const postsRoute = require('./routes/postRoute');


app.use(bodyParser.json());
app.use('/api/v1/users', usersRoute);
app.use('/api/v1/posts',postsRoute);


app.listen(PORT, function (req, res) {
    console.log(`listening on port ${PORT} `);

})