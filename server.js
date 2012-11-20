var http = require("http");

http.createServer( function(req, res) {
    
    res.writeHead( 200, {'Content-Type': 'text/plain'} );
    res.end("<h1>Welcome to Dave's Amazing Cloud App!</h1>" +
        "<p>Written in highly-scalable, non-blocking, asynchronous server-side JavaScript (Node.js) " +
        "using a cloud-based IDE (Cloud9) " +
        "with a cloud-based version control system (GitHub) " +
        "running on a cloud Platform as a Service (Heroku).</p>" +
        "<p>To do: connect to external services/APIs, " +
        "connect to cloud-based SQL and noSQL databases, " +
        "expose an API, " +
        "write a simple UI that resides on another platform, " +
        "deploy this to a truly open Platform as a Service (Cloud Foundry instance)</p>");
    
}).listen(process.env.PORT, process.env.IP);

console.log("http server started");