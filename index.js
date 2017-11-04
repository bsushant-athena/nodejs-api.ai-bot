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
    var responseMsg = "Please consider consulting  *Dr. " + randomItem(doctorList)+ "* who has a clinic closeby! Would like to fix an appointment?";
    var slackMessage = {
        "text": responseMsg,
        "attachments": []
    }
     var formattedResponse = {
        "speech": responseMsg,
        "displayText": responseMsg,
        "contextOut": [],
        "source": "GOT database"
    }

    
    response.send(formattedResponse);
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
