// write a Node.js program to create a basic HTTP server that handles different URL routes.

//The server should : 

// Display "Home Page" when the user visits the root URL ("/"). 
// Display "About Page" when the user visits the "/about" URL. 
// return a 404 status code and a "Page Not Found" message for any other URL.
// provide a link to return to the home page on the 404 page.
// run the server on port 3000. 


const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("<h1>Home Page</h1>");
  } else if (req.url === "/about") {
    res.end("<h1>About Page</h1>");
  } else {
    res.statusCode = 404;
    res.setHeader("Content-Type", "text/html");
    res.end("<h1>OOPS!</h1><p>Page not found</p><a href='/'>Home</a>");
  }
});

server.listen(3000, () => {
  console.log("Server is running...");
});

