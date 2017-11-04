var express = require('express')
var randomItem = require('random-item');
var app = express()
var doctorList = ['John Snow', 'Sansa Stark', 'Tyrion Lannister', 'Arya Stark', 'White Walker'];

app.set('port', (process.env.PORT || 8000))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
  response.send('Practitioner Recommender Service!!')
})


app.get('/fetchdoctor', function(request, response) {

    console.log("Fetching a doctor recommendation....")
    response.send(randomItem(doctorList));
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
