var http = require('http')
var map  = require('through2-map')

var portNumber = Number(process.argv[2]);


var server = http.createServer(function (req, res) {
  if (req.method != 'POST')
    return res.end('send me a post');

  req.pipe(map(function (chunk) { 
  	console.log (chunk.toString().toUpperCase());
    return chunk.toString().toUpperCase();
  })).pipe(res);
  res.end();

});

/*
var server = http.createServer(function (req, res) 
{
  // request handling logic...
  console.log (req.post);
  console.log (req.get);
console.log (req.method);

  if (req.method == 'POST') {
  		console.log('here')
        req.on('data', function(data) {
            data = data.toString();
            console.log (data);
        });
   }
   res.writeHead(200, "OK", {'Content-Type': 'text/plain'});


  res.writeHead(200, { 'content-type': 'text/plain' });
  req.pipe(map(function (chunk) {
      return chunk.toString().split('').toUpperCase().join('');
    })).pipe(res)

   res.end();

})
*/

server.listen(portNumber);


    