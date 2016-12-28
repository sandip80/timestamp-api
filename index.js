var express = require("express")
var path = require("path")
var datetimejs = require("datetimejs")
var timeJSONString = function(unix, natural) {
    return JSON.stringify({"unix": unix, "natural": natural})
}

var app = express()

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'))
})

app.get('/:time', function(req, res) {
    res.set('Content-Type', 'application/json')
    var parsedData = req.params.time
    if (parsedData.search(/^\d+$/) == -1) {
        parsedData = Date.parse(req.params.time)
    } else {
        parsedData = parseInt(parsedData, 10)
    }
    if (isNaN(parsedData)) {
        res.end(timeJSONString(null, null))
    } else {
        var time = new Date(parsedData)
        res.end(timeJSONString(time.getTime(), datetimejs.strftime(time, '%B %D, %Y')))
    }
})

app.listen(8080, function() {
    console.log("App listening on port 8080..")
})
