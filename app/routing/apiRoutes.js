
var friends = require("../data/friends");

module.exports = function(app){ 




//A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
app.get("/api/friends", function(req, res) {
     res.json(friends);
  });
//A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.
app.post("/api/friends", function(req, res) {
   

  var userInput = req.body;
   //çconsole.log('userInput = ' + JSON.stringify(userInput));

  var userResponses = userInput.scores;

  

  
  // loop through friends currently on list
  for (var i = 0; i < friends.length; i++) {
     console.log('friend = ' + JSON.stringify(friends[i]));
     for (var c = 0; c < userResponses.length; c++) {
     //console.log('Scores = '+ JSON.stringify(friends[i].scores[c]));

     //figure out how to find difference between scores
     }

  }
// Add friend
friends.push(userInput);


});
}