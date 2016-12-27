var express = require("express")
var path = require("path")

var app = express()

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/views/index.html'))
})

app.get('/:time', function(req, res) {
    res.set('Content-Type', 'text/html')
    res.end(req.params.time)
})

app.listen(8080, function() {
    console.log("App listening on port 8080..")
})
