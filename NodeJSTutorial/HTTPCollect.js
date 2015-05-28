var http = require ('http');
var bufferList = require ('bl');

var url = process.argv[2];

function processResponse(response)
{
	//console.log(response);
	response.pipe (bufferList(processData));

	//response.on('data', processData);
	//response.on('end' , processEnd);
}


function processData(err, data)
{

	if (err)
	{
		return console.error(err)
	}
	console.log(data.length)
	console.log(data.toString());

}

function processError(e) 
{
  return console.error(e)
}

http.get(url, processResponse)
	.on('error', processError);




