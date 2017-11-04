var express = require('express')
var randomItem = require('random-item');
var app = express()
var doctorList = ['John Snow', 'Sansa Stark', 'Tyrion Lannister', 'Arya Stark', 'White Walker'];

app.set('port', (process.env.PORT || 8000))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
  response.send('Practitioner Recommender Service!!')
})


app.post('/fetchmydoctor', function(request, response) {

    console.log("Fetching a doctor recommendation....")
    var responseMsg = "We searched our database find a recommended doctor for you and the details are " + randomItem(doctorList);
    var formattedResponse = {
        "speech": responseMsg,
        "displayText": responseMsg,
        "data": {},
        "contextOut": [],
        "source": "DuckDuckGo"
    }
    
    response.send(formattedResponse);
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
