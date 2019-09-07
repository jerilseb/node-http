const http = require("./http");

const server = http.createServer((req, res) => {
  // This is the as our original code with the http module :)
  console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
  res.setHeader('Content-Type','text/plain');
  res.setStatus(400, 'Not found');
  res.json({message: "success"});
});

server.listen(3000, () => {
    console.log("Server listening on port 3000");
});