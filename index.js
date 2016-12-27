var express = require("express")
var app = express()

app.get('/', function(req, res) {
    res.set('Content-Type', 'text/html')
    res.end("Hello World\n")
})

app.listen(8080, function() {
    console.log("App listening on port 8080..")
})
