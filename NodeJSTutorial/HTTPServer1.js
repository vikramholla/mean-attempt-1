var http = require('http')
var fs = require("fs");

var portNumber = Number(process.argv[2]);
var filepath = process.argv[3];

var srcStream = fs.createReadStream(filepath)

var server = http.createServer(function (req, res) 
{
  // request handling logic...
  res.writeHead(200, { 'content-type': 'text/plain' });
  srcStream.pipe(res);
})

server.listen(portNumber);