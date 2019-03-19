require("dotenv").config();
const express = require("express");
const uuid = require('uuid/v4')
const session = require("express-session");
const exphbs = require("express-handlebars");
const passport = require("./config/passport");
const bodyParser = require('body-parser');

// sets up port and models
const PORT = process.env.PORT || 3000;
var db = require("./models");

const app = express();


// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// We need to use sessions to keep track of our user's login status
app.use(
  session({
    genid: (req) => {
      console.log(`In the session middleware with sessionID: ${req.sessionID}`);
      // creating a unique string with uuid for a sessionID
      return uuid()
    },

    secret: "keyboard cat",
    resave: true,
    saveUninitialized: true
  })
);

app.use(passport.initialize());
app.use(passport.session());

// Handlebars
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main"
  })
);
app.set("view engine", "handlebars");

// Routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

var syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions).then(function () {
  app.listen(PORT, function () {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );

    require("./db/data");
  });
});

module.exports = app;
