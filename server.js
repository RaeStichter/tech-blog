const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');

const app = express();
const PORT = process.env.PORT || 3001;

const sequelize = require('./config/config');

const helpers = require('./utils/helpers');
const hbs = exphbs.create({helpers});

// ---------- SETUP SESSIONS ----------
const session = require('express-session');

const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(require('./controllers/'));

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});





// //this will allow the css/JS files to hookup
// const path = require('path');

// const express = require('express');
// //sets up express-session and sequelize-store
// const session = require('express-session');
// //this sets up Handlebars.js functionality
// const exphbs = require('express-handlebars');

// const routes = require('./controllers');

// //start off connection to server===============

// const app = express();
// const PORT = process.env.PORT || 3001;

// //=============================================

// const sequelize = require('./config/config');
// const SequelizeStore = require('connect-session-sequelize')(session.Store);

// const sess = {
//     secret: "Super secret secret",
//     cookie: { maxAge: 10 * 60 * 1000 },
//     resave: false,
//     saveUninitialized: true,
//     store: new SequelizeStore({
//         db: sequelize
//     })
// };

// //turn on session storage
// app.use(session(sess));

// //import helper functions
// // const helpers = require('./utils/helpers');
// // const hbs = exphbs.create({ helpers });

// const hbs = exphbs.create({});

// //set handlbars as the default engine
// app.engine('handlebars', hbs.engine);
// app.set('view engine', 'handlebars');

// //Middleware=========================================
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// //this is an express.js middleware function that can take all of the contents of a folder and serve them as
// //static assets. This is useful for front end specific files like images, style sheets, and javascript files.
// app.use(express.static(path.join(__dirname, 'public')));

// app.use(require('./controllers/'));
// app.use(routes);

// sequelize.sync({ force: false }).then(() => {
//     app.listen(PORT, () => console.log(`Now Listening on Port: ${PORT}!`));
// });



// // ------------------------- SETUP -------------------------
// // Dependencies
// var express = require('express');
// var exphbs  = require('express-handlebars');
// const bodyParser = require('body-parser');
// const path = require('path');
// const mysql = require('mysql2');

// // Module dependencies
// const db_config = require("./config/config");

// // Create an instance of the expresss app.
// var app = express();

// // Added so body parser can handle post requests.
// // If we didn't have this the body would come back as undefined
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// // Host static Files so css and js files can be retrieved
// app.use(express.static(path.join(__dirname, '/public')));

// // Set the port of our application
// // process.env.PORT lets the port be set by Heroku
// // can set to any number you want, this is not Heroku specific
// var PORT = process.env.PORT || 9090;

// // Set Handlebars as the default templating engine
// app.engine("handlebars", exphbs({ deafaultLayout: "main" }));
// app.set("view engine", "handlebars");



// // ------------------------- ROUTES (test) -------------------------
// app.get("/", function(req, res) {
//   //let connection = mysql.createConnection(db_config);
//   //let promisedParanormal_locations = new Promise((resolve, reject) => {
//   //  connection.query("SELECT * FROM paranormal_locations;", function(err, data) {
//   //   console.log(data);
//   //    if (err) {
//   //      return res.status(500).end();
//   //    }
//   //    connection.end();
//       // output from '\views\index.handlebars'
//       res.render("index");
//   //  });
//  // });
//   //promisedParanormal_locations.then((successMessage) => {
//     // successMessage is whatever we passed in the resolve(...) function above.
//     // It doesn't have to be a string, but if it is only a succeed message, it probably will be.
//    // res.send(successMessage);
//   //}); 
// });

// // ------------------------- APP.LISTEN -------------------------
// app.listen(PORT, function() {
//     // Log (server-side) when our server has started
//     console.log("Server listening on http://localhost:" + PORT);
// });




































// // ------------------------- SETUP -------------------------
// // Dependencies
// const path = require('path');
// // express and express-sessions setup
// const express = require('express');
// const session = require('express-session');
// // enable handlebars functionality
// const exphbs  = require('express-handlebars');

// // sequelize
// const sequelize = require('./config/config');

// // link to the routes that will be used for navidation
// const routes = require('./controllers');

// // ------------------------- SERVER CONNECTION -------------------------

// const app = express();
// const PORT = process.env.PORT || 3001;

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// // turn on routes
// app.use(routes);

// // turn on connection to db and server
// sequelize.sync({ force: false }).then(() => {
//   app.listen(PORT, () => console.log('Now listening'));
// });

// // const bodyParser = require('body-parser');

// // const mysql = require('mysql2');


// // // Module dependencies
// // const db_config = require("./config/config");

// // // Create an instance of the expresss app.
// // var app = express();

// // // Added so body parser can handle post requests.
// // // If we didn't have this the body would come back as undefined
// // app.use(bodyParser.json());
// // app.use(bodyParser.urlencoded({ extended: true }));

// // // Host static Files so css and js files can be retrieved
// // app.use(express.static(path.join(__dirname, '/public')));

// // // Set the port of our application
// // // process.env.PORT lets the port be set by Heroku
// // // can set to any number you want, this is not Heroku specific
// // var PORT = process.env.PORT || 9090;

// // // Set Handlebars as the default templating engine
// // app.engine("handlebars", exphbs({ deafaultLayout: "main" }));
// // app.set("view engine", "handlebars");



// // // ------------------------- ROUTES (test) -------------------------
// // // app.get("/", function(req, res) {
// // //   //let connection = mysql.createConnection(db_config);
// // //   //let promisedParanormal_locations = new Promise((resolve, reject) => {
// // //   //  connection.query("SELECT * FROM paranormal_locations;", function(err, data) {
// // //   //   console.log(data);
// // //   //    if (err) {
// // //   //      return res.status(500).end();
// // //   //    }
// // //   //    connection.end();
// // //       // output from '\views\index.handlebars'
// // //       res.render("index");
// // //   //  });
// // //  // });
// // //   //promisedParanormal_locations.then((successMessage) => {
// // //     // successMessage is whatever we passed in the resolve(...) function above.
// // //     // It doesn't have to be a string, but if it is only a succeed message, it probably will be.
// // //    // res.send(successMessage);
// // //   //}); 
// // // });

// // // ------------------------- APP.LISTEN -------------------------
// // app.listen(PORT, function() {
// //     // Log (server-side) when our server has started
// //     console.log("Server listening on http://localhost:" + PORT);
// // });