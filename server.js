// Dependencies
// =============================================================
var express = require("express");
var path = require("path");
var fs = require("fs");
var uuid = require("uuid");
let notes =  require("./db/db.json")

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 8080;

//parse the data 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'static')));
app.use(express.static(path.join(__dirname, '/public')));

//create the html routes
// =============================================================

//send the user to the notes page 
app.get("/notes", function(req, res){
    res.sendFile(path.join(__dirname, "/public/notes.html"));

});

//send the user to the homepage
app.get("*", function(req, res){
    res.sendFile(path.join(__dirname, "/public/index.html"));
});


//get db.json
fs.readFile("./db/db.json", 'utf-8', (err, data) => {
    if (err) throw err
  
    notes = JSON.parse(data)
  })

// * GET `/api/notes` - Should read the `db.json` file and return all saved notes as JSON.
app.get("/api/notes", function(req, res) {
    return res.json(notes);
    //How do you check to see if this is working? 
    //issues with css
  });

//   //create a new note
//   // * POST `/api/notes` - Should recieve a new note to save on the request body, add it to the
//   //  `db.json` file, and then return the new note to the client.
//   app.post("/api/notes", function(req, res) {
      
   

//     //each note needs an id  so install UUID

//     // req.body hosts is equal to the JSON post sent from the user
//     // This works because of our body parsing middleware
//     let newNoteId = uuid();
    
//     let newNote = {
//         id: newNoteId,
//          //title
//          title: req.body.title,
//          //content 
//         content: req.body.content
//       };

//       console.log(newNote);
    
//       notes.push(newNote);
    
//       res.json(newNote);
//     });
  // * DELETE `/api/notes/:id` - Should recieve a query paramter containing the id of a note to delete.
  //  This means you'll need to find a way to give each note a unique `id` when it's saved. In order to delete 
  //  a note, you'll need to read all notes from the `db.json` file, remove the note with the given `id` property,
  //   and then rewrite the notes to the `db.json` file.
  
  // app.delete("/api/notes/:id", function(req, res) {
  //     // req.body hosts is equal to the JSON post sent from the user
  //     // This works because of our body parsing middleware
  
  //     notes.splice(oldNote);
  //   });

//store the data in db,json using fs 

//delete the data in db,json using fs 

//create api routes 

//server listener 
app.listen(PORT, function() {
    console.log("App listening onA PORT " + PORT);
 });
  