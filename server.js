// Dependencies
// =============================================================
var express = require("express");
var path = require("path")


// Sets up the Express App
// =============================================================
var app = express();
var PORT = 8080;

//parse the data 

//create the html routes
// =============================================================

app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "/public/index.html"));
});

app.get("/notes", function(req, res){
    res.sendFile(path.join(__dirname, "/public/notes.html"));
});
//send the user to the homepage
//send the user to the notes page 
//create a new note
//store the data in db,json using fs 
//create api routes 
//server listener 
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  