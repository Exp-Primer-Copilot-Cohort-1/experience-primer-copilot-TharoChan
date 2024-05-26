// create web server
// create a web server that listens on port 3000 and returns the comment data when a request is made to the /comments URL.

// Create a web server that listens on port 3000.
// When a request is made to the /comments URL, return the comment data.
// Use the comments variable provided.

const http = require('http');
const comments = require('./comments');

const server = http.createServer((req, res) => {
  if (req.url === '/comments') {
    res.write(JSON.stringify(comments));
    res.end();
  }
});

server.listen(3000);
