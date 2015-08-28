var net = require('net');
process.stdin.setEncoding('utf8');

var socketMemory = [];

var server = net.createServer(function(socket) { //'connection' listener
  console.log('client connected');
  socketMemory.push(socket);


  console.log("socketMemory:" + socketMemory);
  process.stdin.pipe(socket);

  socket.on('data', function(data) {
    socketMemory.forEach(function(element){
      if(socket !== element){
        element.write(data);
      }
    });
      process.stdout.write(data);
  });

  socket.on('end', function() {
    console.log('client disconnected');
  });

});

  server.listen(6969, function() { //'listening' listener
    console.log('server bondage');
  });


//socket >  _connections