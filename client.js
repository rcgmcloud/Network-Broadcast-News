var net = require('net');
var PORT = 6969;
var HOST = "0.0.0.0";

process.stdin.setEncoding('utf8');

var client = net.connect({port:PORT, host:HOST}, function() {
  //'connect' listener
  console.log('connected to server!');
  process.stdin.pipe(client);
});

client.on('data', function(data) {
  process.stdout.write(data);
});

client.on('end', function() {
  console.log('client ended.');
});

//if client receives pipe, it writes it back
//if need keyboard, that's process.stdin
//if need display on screen, that's process.stdout
