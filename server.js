// Dependencies
// =============================================================
var express = require("express");
var path = require("path");
// var fs = require("fs");
// var uuid = require("uuid");
// var notes =  require("./db/db.json")

// Sets up the Express App
// =============================================================
var app = express();

var PORT = process.env.PORT || 3000;

//parse the data 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'static')));
app.use(express.static(path.join(__dirname, '/public')));

// ROUTER

// =============================================================

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);


//server listener 
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
 });
  