
var http = require('http');


var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end("hello Amigos! this is a simple docker node.js example \n");
});


server.listen(8000);
console.log("Server listening at http://127.0.0.1:8000/");
