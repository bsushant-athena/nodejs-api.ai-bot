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
    var responseMsg = "We searched our database to find a recommended doctor for you and the details are " + randomItem(doctorList);
    var slackMessage = {
        "text": responseMsg,
        "attachments": []
    }
     var formattedResponse = {
        "speech": responseMsg,
        "displayText": responseMsg,
        "data": {
            "slack": {&lt;slackMessage&gt;}
        },
        "contextOut": [],
        "source": "GOT database"
    }

    
    response.send(formattedResponse);
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
