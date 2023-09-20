'use strict';
require('dotenv').config();

const express = require('express');
const app = express();
const cors = require('cors');

const mongooseConnection = require('./lib/mongo');
const client = require('./lib/elasticSearch');
const corsOptions = require('./config/corsOptions');

app.use(cors(
    {
        origin: process.env.ORIGIN,
        optionsSuccessStatus: 200,
        credentials: true,
    },
));
const port = process.env.PORT;

app.use(express.json());
// !IMPORTANT : express.ratelimiter has not been added
// routes
/**
 * @endpoint : /profile/insert
 * @endpoint : /profile/get
 * @endpoint : /profile/update
 * @endpoint : /profile/delete
 */
const profileInsert = require('./routes/profiles/profileInsert');
const profileGet = require('./routes/profiles/profileGet');
app.use('/profile/insert', profileInsert);
app.use('profile/get', profileGet);


app.listen(port, ()=>{
    mongooseConnection.connect();
    console.log('Server is running on port: '+port);
});
