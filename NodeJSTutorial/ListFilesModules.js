var rd = require('./ReadDir.js');

function printFileName(err, fileList)
{
	if (!err)
	{
		fileList.forEach(function (file) 
		{
			console.log(file)
		})
	}
	else
	{
		console.log("You have an error buddy! " + err);
	}
}

rd.readdir(process.argv[2], process.argv[3], printFileName);

