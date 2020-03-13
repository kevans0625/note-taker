 // Dependencies

var path = require("path");


//create the html routes
// =============================================================


module.exports = function(app) {
    // HTML GET Requests
    // Below code handles when users "visit" a page.
    // In each of the below cases the user is shown an HTML page of content
    // ---------------------------------------------------------------------------
  
 //send the user to the homepage
app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

    //send the user to the notes page 
app.get("/notes", function(req, res){
    res.sendFile(path.join(__dirname, "../public/notes.html"));
});


// If no matching route is found default to home
app.get("*", function(req, res){
    res.sendFile(path.join(__dirname, "../public/index.html"));
});
  
  };