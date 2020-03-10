// Dependencies
// =============================================================
var express = require("express");
var path = require("path")



// Sets up the Express App
// =============================================================
var app = express();
var PORT = 8080;

//parse the data 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//create the html routes
// =============================================================

//send the user to the homepage
app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "/public/index.html"));
});

//send the user to the notes page 
app.get("/notes", function(req, res){
    res.sendFile(path.join(__dirname, "/public/notes.html"));
});

//review db.json

//create a new note

//store the data in db,json using fs 

//create api routes 

//server listener 
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
 });
  