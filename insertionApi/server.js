var express = require('express');
var app = express();
var fs = require("fs");

var bodyParser = require('body-parser')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(express.json());

app.post('/insertionSort2', function (req, res) {
    var data = req.body.elements
    var sorted_data = insertionSort(data);
    res.send(sorted_data)
    res.end();
})

var server = app.listen(3000, function () {
    var host = server.address().address
    var port = server.address().port
    console.log(host)
    console.log("Example app listening at http://%s:%s", host, port)
})

let insertionSort = (inputArr) => {
    let length = inputArr.length;
    for (let i = 1; i < length; i++) {
        let key = inputArr[i];
        let j = i - 1;
        while (j >= 0 && inputArr[j] > key) {
            inputArr[j + 1] = inputArr[j];
            j = j - 1;
        }
        inputArr[j + 1] = key;
    }
    return inputArr;
};