var http = require("http");

var options = {
    host: 'soundcloud.com',
    port: 80,
    path: '/'
};

http.get(options, function(res) {
    if (res.statusCode == 200) {
        console.log("The site (" + options.host + ") is up!");
    }
    else {
        console.log("The site (" + options.host + ") is down!");
    }
}).on('error', function(e) {
    console.log("There was an error: " + e.message);
});