var net = require('net');

function zeroFill(i) 
{
  return (i < 10 ? '0' : '') + i
}

var server = net.createServer(function (socket) {
      // socket handling logic
      	//console.log('client connected');

  		socket.on('end', function() 
  		{
    		console.log('client disconnected');
  		});

	  	//socket.write('hello\r\n');

	    var date = new Date();

	    var dateStr = 	date.getFullYear()
	    				+ "-"
	    				+ zeroFill(date.getMonth() + 1)   // starts at 0
	    				+ "-"
	    				+ zeroFill(date.getDate())      // returns the day of month
	    				+ " "
	    				+ zeroFill(date.getHours()) 
	    				+ ":"
	    				+ zeroFill(date.getMinutes()) ;

	    socket.write(dateStr + '\r\n');

	  	socket.pipe(socket);

	  	socket.end();

    });
 
 server.listen(process.argv[2])
