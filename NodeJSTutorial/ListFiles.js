

    var fs = require('fs')
    var path = require('path')
    
    fs.readdir(process.argv[2], function (err, list) {
      list.forEach(function (file) {
        if (path.extname(file) === '.' + process.argv[3])
          console.log(file)
      })
    })

/*

var fs = require("fs");
var path = require("path");

var dir = process.argv[2];
var ext = "." + process.argv[3];

var fileList;

function listFiles(callback)
{
	fs.readdir(dir, function doneReading (err, list) {

		fileList = list;
		callback();
	}
		)
	
}

function printList()
{
	for (i = 0; i < fileList.length; i++)
	{
		if (path.extname(fileList[i]) == ext) 
		{ 
			console.log(fileList[i]);
		}
	}
}

listFiles(printList);

*/
