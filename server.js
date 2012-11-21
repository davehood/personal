var http = require('http'),
    url = require('url');
    
http.createServer( function(req, res) {
    
    var pathname = url.parse(req.url).pathname;

    if (pathname === '/') {
        
        res.writeHead( 200, {'Content-Type': 'text/html'} );
        res.end("<h1>Welcome to Dave's Amazing Cloud App!</h1>" +
            "<p>Written in highly-scalable, non-blocking, asynchronous server-side JavaScript (Node.js) " +
            "using a cloud-based IDE (Cloud9) " +
            "with a cloud-based version control system (GitHub) " +
            "running on a cloud Platform as a Service (Heroku).</p>" +
            "<p>To do: connect to external services/APIs, " +
            "connect to cloud-based SQL and noSQL databases, " +
            "expose an API, " +
            "write a simple UI that resides on another platform, " +
            "deploy this to a truly open Platform as a Service (Cloud Foundry instance).</p>");
        
    } else if (pathname === '/about') {
        res.writeHead(200, {
            'Content-Type': 'text/plain'
        });
        res.end('About Us\n');
    } else if (pathname === '/redirect') {
        res.writeHead(301, {
            'Location': '/'
        });
        res.end();
    } else if (pathname === '/get503') {
        res.writeHead(503, {
        });
        res.end();
    } else {
        res.writeHead(404, {
            'Content-Type': 'text/plain'
        });
        res.end('Page not found\n');
    }
    
}).listen(process.env.PORT, process.env.IP);

console.log("http server started");