var http = require('http');
const port = 5000;
// create a server

http.createServer((req, res) => {
    console.log(req.url);

    if (req.url === "/" || req.url === "/home") {
        res.writeHead(200, { "content-Type": 'text/plain' });
        res.end("Welcome");
    }else if (req.url === "/about" ) {
        res.writeHead(200, { "content-Type": 'text/plain' });
        res.end("About Page");
    }else if (req.url === "/contact" ) {
        res.writeHead(200, { "content-Type": 'text/plain' });
        res.end("Conatct Page");
    }
    
    else{
        res.writeHead(404, { "content-Type": 'text/plain' });
        res.end("404 Page not found!");
    }

}).listen(port);

console.log("server is up at " + port);
