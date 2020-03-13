var fs = require("fs");
// var uuid = require("uuid");
var notes =  require("../db/db.json")
//get db.json
module.exports = function(app) {
fs.readFile("./db/db.json", 'utf-8', (err, data) => {
    if (err) throw err
  
    notes = JSON.parse(data)
  });

// * GET `/api/notes` - Should read the `db.json` file and return all saved notes as JSON.
app.get("/api/notes", function(req, res) {
    console.log("hello!");
    return res.json(notes);
    //How do you check to see if this is working? 
  });

//   //create a new note
  // * POST `/api/notes` - Should recieve a new note to save on the request body, add it to the
  //  `db.json` file, and then return the new note to the client.
  
  // * DELETE `/api/notes/:id` - Should recieve a query paramter containing the id of a note to delete.
  //  This means you'll need to find a way to give each note a unique `id` when it's saved. In order to delete 
  //  a note, you'll need to read all notes from the `db.json` file, remove the note with the given `id` property,
  //   and then rewrite the notes to the `db.json` file.
  
  // app.delete("/api/notes/:id", function(req, res) {
  //     // req.body hosts is equal to the JSON post sent from the user
  //     // This works because of our body parsing middleware 
  //create a loop 
  //     notes.splice(oldNote);

    // if (activeNote.id === note.id) {
    //   activeNote = {};
    // }
  
    // deleteNote(note.id).then(function() {
    //   getAndRenderNotes();
    //   renderActiveNote();
    // });
  //   });

//store the data in db,json using fs 

//delete the data in db,json using fs 

//create api routes 
}