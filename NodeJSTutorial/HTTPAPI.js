var http = require('http')
var url  = require('url')
var qs   = require('querystring')

var portNumber = Number(process.argv[2]);

const parseTimePath = '/api/parsetime'
const unixTimePath  = '/api/unixtime'

var server = http.createServer(function (req, res) {
  
  apipath = url.parse(req.url, true).pathname
  
  res.writeHead(200, { 'Content-Type': 'application/json' })
  
  if (apipath == parseTimePath)
  {
    parseTime(res, url.parse(req.url).query);
  } else if (apipath == unixTimePath)
  {
    convertToUnixTime(res, url.parse(req.url).query);
  }

  res.end();

});

function parseTime(res, timestringQuery)
{
//   http://localhost:8124/api/parsetime?iso=2013-08-10T12:10:15.474Z

  timestring = qs.parse(timestringQuery).iso;

  date = new Date(timestring);
  timeJSON = JSON.stringify({ hour: date.getHours(), minute : date.getMinutes(), second: date.getSeconds()}, null, '\t' );
  res.write (timeJSON);
}

function convertToUnixTime(res, timestringQuery)
{
  // http://localhost:8124/api/unixtime?iso=2013-08-10T12:10:15.474Z

  timestring = qs.parse(timestringQuery).iso;

  date = new Date(timestring);
  timeJSON = JSON.stringify({ unixtime: date.getTime() }, null, '\t' );
  res.write (timeJSON);

}

server.listen(portNumber);


/*
    var http = require('http')
    var url = require('url')
    
    function parsetime (time) {
      return {
        hour: time.getHours(),
        minute: time.getMinutes(),
        second: time.getSeconds()
      }
    }
    
    function unixtime (time) {
      return { unixtime : time.getTime() }
    }
    
    var server = http.createServer(function (req, res) {
      var parsedUrl = url.parse(req.url, true)
      var time = new Date(parsedUrl.query.iso)
      var result
    
      if (/^\/api\/parsetime/.test(req.url))
        result = parsetime(time)
      else if (/^\/api\/unixtime/.test(req.url))
        result = unixtime(time)
    
      if (result) {
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify(result))
      } else {
        res.writeHead(404)
        res.end()
      }
    })
    server.listen(Number(process.argv[2]))
    */
    

    