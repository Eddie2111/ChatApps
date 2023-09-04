const express = require('express');
const app = express();
const cors = require('cors');
const cookieparser = require('cookie-parser');
const { corsOptions } = require('./config/corsOptions');
const { Limiter } = require('./config/rateLimit');

// middleware
app.use(cors(corsOptions));
app.use(cookieparser());
require('dotenv').config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(Limiter);

// importing routes
const index = require('./routes/index');
const login = require('./routes/login');
const signup = require('./routes/signup');
const signout = require('./routes/signout');
const authcheck = require('./routes/authcheck');
const update = require('./routes/update');

// routes
app.use('/', index);
app.use('/login', login);
app.use('/signup', signup);
app.use('/signout', signout);
app.use('/update', update);
app.use('/authcheck', authcheck);


const port = process.env.PORT || 3000;
app.listen(port, ()=> console.log(`Server running on port ${port}`));
