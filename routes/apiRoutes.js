var fs = require("fs");
var notes = require("../db/db.json")
const { v4: uuidv4 } = require('uuid');

//get db.json
module.exports = function (app) {
  // fs.readFile("./db/db.json", 'utf-8', (err, data) => {
  //     if (err) throw err

  //     notes = JSON.parse(data)
  //   });

  // * GET `/api/notes` - Should read the `db.json` file and return all saved notes as JSON.
  app.get("/api/notes", function (req, res) {
    console.log("hello!");

    fs.readFile("./db/db.json", 'utf-8', (err, data) => {
      if (err) throw err
      //add an id 
      notes = JSON.parse(data)
      return res.json(notes);
    })

  });


  //   //create a new note
  // * POST `/api/notes` - Should recieve a new note to save on the request body, add it to the
  //  `db.json` file, and then return the new note to the client.
  app.post("/api/notes", function (req, res) {
    //request holds data from the client 
    console.log(req);
    var note_title = req.body.title;
    var note_content = req.body.text;
    //add id as a property of note everytime a note is added 

    fs.readFile('./db/db.json', 'utf-8', function (err, data) {
      if (err) throw err
      let max_number = 0;
      var arrayOfObjects = JSON.parse(data)
      for (let i =0; i < arrayOfObjects.length; i++){
        if (arrayOfObjects.length == 1 ){
          max_number = arrayOfObjects[i].id;
        } else if (arrayOfObjects[i].id > arrayOfObjects[i+1].id) {
          max_number = arrayOfObjects[i].id;
        } else if (arrayOfObjects[i].id < arrayOfObjects[i+1].id){
          max_number = arrayOfObjects[i+1].id;
        }
      }
      console.log(arrayOfObjects)
      arrayOfObjects.push({
        id: max_number+1,
        title: note_title,
        text: note_content
      })



      fs.writeFile('./db/db.json', JSON.stringify(arrayOfObjects), 'utf-8', function (err) {
        if (err) throw err
        console.log('Done!')
      })
    })
  });

};


    
    
  