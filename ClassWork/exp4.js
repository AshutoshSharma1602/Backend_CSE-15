const http = require("http");

const server = http.createServer((req, res) => {
  res.write("Hello, welcome to Node.js!");
  res.end();
});

server.listen(3000, () => {
  console.log("server is running on port 3000");
});
