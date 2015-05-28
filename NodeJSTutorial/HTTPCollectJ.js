var http = require ('http');
var bufferList = require ('bl');

var endCount = 0;
var urls = [];
var urlContents = [];
var index = 0;


function getResp (url, index)
{
	http.get(url, function (response)
	{
		response.pipe (bufferList(function (err, data)
		{
			if (err)
			{
				return console.error(err)
			}
			urlContents[index] = data.toString();
		}
		));
		response.on('end' , processEnd);
	})
	.on('error', processError);
}


function processEnd()
{
	endCount++;

	if (endCount == urls.length)
	{
		printContent();
	}
}

function processError(e) 
{
  return console.error(e)
}

function printContent()
{
	for (i=0; i<urlContents.length; i++)
	{
		console.log(urlContents[i]);
	}
}


for (i= 2; i< process.argv.length; i++)
{
	urls[urls.length] = process.argv[i];
};


for (i= 0; i< urls.length; i++)
{
	getResp (urls[i], i);
};

/*
    var http = require('http')
    var bl = require('bl')
    var results = []
    var count = 0
    
    function printResults () {
      for (var i = 0; i < 3; i++)
        console.log(results[i])
    }
    
    function httpGet (index) {
      http.get(process.argv[2 + index], function (response) {
        response.pipe(bl(function (err, data) {
          if (err)
            return console.error(err)
    
          results[index] = data.toString()
          count++
    
          if (count == 3)
            printResults()
        }))
      })
    }
    
    for (var i = 0; i < 3; i++)
      httpGet(i)
*/






