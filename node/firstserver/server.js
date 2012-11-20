var http = require("http");

http.createServer( function(req, res) {
    
    res.writeHead( 200, {'Content-Type': 'text/plain'} );
    res.end("Dave's first web server");
    
}).listen(process.env.PORT, process.env.IP);

console.log("http server started");