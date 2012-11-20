var http = require("http");

http.createServer( function(req, res) {
    
    res.writeHead( 200, {'Content-Type': 'text/plain'} );
    res.end("Welcome to Dave's first fully cloud-capable app " +
        "written in highly-scalable, non-blocking, asynchronous server-side JavaScript (Node.js) " +
        "using a cloud-based IDE (Cloud9) " +
        "with a cloud-based version control system (GitHub) " +
        "running on a cloud Platform as a Service (Heroku) ");
    
}).listen(process.env.PORT, process.env.IP);

console.log("http server started");