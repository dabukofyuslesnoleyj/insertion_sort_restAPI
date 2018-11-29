var express = require('express');
var app = express();
var fs = require("fs");

var bodyParser = require('body-parser')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(express.json());

app.post('/insertionSort', function (req, res) {
    var data = req.body.elements
    var sorted_data = data.sort()
    res.send(sorted_data)
    res.end();
})

var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port
    console.log(host)
    console.log("Example app listening at http://%s:%s", host, port)
})