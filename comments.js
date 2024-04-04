// Create web server
var http = require('http');
// Create a web server
http.createServer(function (req, res) {
    // Set the response HTTP header with HTTP status and Content type
    res.writeHead(200, {'Content-Type': 'text/plain'});
    // Send the response body "Hello World"
    res.end('Hello World\n');
}).listen(8080); // Bind the server to listen on port 8080

// Log the message to the console
console.log('Server running at http://8080/');