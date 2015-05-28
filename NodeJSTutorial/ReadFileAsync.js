var fs = require("fs");
var filepath = process.argv[2];

var lineCount = 0;

function countLine(callback) {
  fs.readFile(filepath, function doneReading(err, contents) {
    var str = contents.toString();
    lineCount = str.split('\n').length;
    callback()
  })
}

function logMyCount() {
  
  console.log(lineCount-1)
  
}

countLine(logMyCount)
