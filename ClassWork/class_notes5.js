const express = require("express");

const server = express();

server.get("/", (req, res) => {
    console.log("GET method called");
    res.json({ message: "Hello from GET" });
});

server.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});