var http = require ('http');
var url = process.argv[2];

function processResponse(response)
{
	//console.log(response);
	response.on('data', processData);
	response.on('end' , processEnd);
}


function processData(data)
{
	//console.log ("in data");
console.log(data.toString());
}

function processEnd()
{
	//console.log ("in end");
}

function processError(e) 
{
  console.log("Got error: " + e.message);
}

http.get(url, processResponse)
	.on('error', processError)
	
;


//http.get("http://www.google.com/index.html", processResponse).on('error', processError);



