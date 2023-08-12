const express = require('express');
const app = express();
const cors = require('cors');

const { corsOptions } = require('./config/corsOptions');

// middleware
app.use(cors(corsOptions));
require('dotenv').config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// importing routes 
const index = require('./routes/index');
const login = require('./routes/login');
const signup = require('./routes/signup');
const signout = require('./routes/signout');
const authcheck = require('./routes/authcheck');

// routes
app.use('/', index);
app.use('/login', login);
app.use('/signup', signup);
app.use('/signout', signout);
app.use('/authcheck', authcheck);

const port = process.env.PORT || 3000;
app.listen(port, ()=> console.log(`Server running on port ${port}`));