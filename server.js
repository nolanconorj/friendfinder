var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();


var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


//app.use(express.static(path.join(__dirname, "app/data") ));
//require("./app/data/friends")(app);

// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.

//app.use(express.static(path.join(__dirname, "app/public") ));
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

/*app.get("/home", function(req, res) {
    res.sendFile(path.join(__dirname, "app/public/home.html"));
  });
  
  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "app/public/survey.html"));
  });*/


// LISTENER
// The below code effectively "starts" our server

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
