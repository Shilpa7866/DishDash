// load .env data into process.env
require('dotenv').config();

// Web server config

const sassMiddleware = require('./lib/sass-middleware');
const express = require('express');
const morgan = require('morgan');
const cookieSession = require('cookie-session');
const bodyParser  = require("body-parser");

const PORT = process.env.PORT || 8080;
const app = express();

const ENV = process.env.ENV  || "development";


//const knexConfig  = require("./knexfile");
//const knex        = require("knex")(knexConfig[ENV]);
//const knexLogger  = require('knex-logger');

//const twilio      = require('twilio');
//const client      = new twilio(process.env.SMS_Account, process.env.SMS_Token);
const moment      = require('moment-timezone');


app.set('view engine', 'ejs');

// Log knex SQL queries to STDOUT as well
//app.use(knexLogger(knex));


// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(cookieSession({
  name: 'session',
  keys: ['secretkey']
}));
app.use(
  '/styles',
  sassMiddleware({
    source: __dirname + '/styles',
    destination: __dirname + '/public/styles',
    isSass: false, // false => scss, true => sass
    debug:true,
    outputStyle: 'expanded'
  })
);
app.use(express.static('public'));

// Separated Routes for each Resource
// Note: Feel free to replace the example routes below with your own
const userApiRoutes = require('./routes/users-api');
const widgetApiRoutes = require('./routes/widgets-api');
const usersRoutes = require('./routes/users');
const restaurantRoutes = require('./routes/restaurant');

// Mount all resource routes
// Note: Feel free to replace the example routes below with your own
// Note: Endpoints that return data (eg. JSON) usually start with `/api`
app.use('/api/users', userApiRoutes);
app.use('/api/widgets', widgetApiRoutes);
app.use('/users', usersRoutes);
app.use('/restaurant', restaurantRoutes)
// Note: mount other resources here, using the same pattern above

// Home page
// Warning: avoid creating more routes in this file!
// Separate them into separate routes files (see above).

 
// Index page
app.get("/", (req, res) => {
  res.render('index');
});

// Home page
app.get('/home', (req, res) => {
  const templateVars = { user: req.session.user }
  res.render('home', templateVars);
});
 

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
