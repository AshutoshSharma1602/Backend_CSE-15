//Write a program to create a simple HTTP server using the http.server module.
//  The server should listen on port 8000 and display "Hello World" when a client sends a
//  GET request.

const http = require("http");

const server = http.createServer((req, res) => {
    if (req.method === "GET") {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("Hello World");
    }
});

server.listen(8000, () => {
    console.log("Server started at http://localhost:8000");
});

