// create web server
// http://localhost:3000
// http://localhost:3000/comments
// http://localhost:3000/comments/1
// http://localhost:3000/comments/2
// http://localhost:3000/comments/3
// http://localhost:3000/comments/4
// http://localhost:3000/comments/5
// http://localhost:3000/comments/6
// http://localhost:3000/comments/7
// http://localhost:3000/comments/8
// http://localhost:3000/comments/9
// http://localhost:3000/comments/10

var http = require('http');
var url = require('url');

var comments = [
  {name: 'John', comment: 'Hello'},
  {name: 'Jane', comment: 'World'},
  {name: 'Jim', comment: 'JavaScript'},
  {name: 'Jack', comment: 'Node.js'},
  {name: 'Jill', comment: 'Hello World'},
  {name: 'Joe', comment: 'Hello JavaScript'},
  {name: 'Jenny', comment: 'Hello Node.js'},
  {name: 'Jerry', comment: 'Hello World'},
  {name: 'Jesse', comment: 'Hello JavaScript'},
  {name: 'Jasmine', comment: 'Hello Node.js'}
];

var server = http.createServer(function(request, response) {
  var path = url.parse(request.url).pathname;
  var index = parseInt(path.slice(9));
  var comment = comments[index];

  response.writeHead(200, {'Content-Type': 'application/json'});
  response.end(JSON.stringify(comment));
});

server.listen(3000, 'localhost');
console.log('Server running at http://localhost:3000/');