const fs = require('fs');
const http = require('http');

fs.readFile('input.txt', function(err,data){
    if(err){
        console.log(err);
    }else{
        console.log('Async data is' + data.toString());
    }
});

http.createServer(function (req, res) {
    fs.readFile('index.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      return res.end();
    });
  }).listen(4000);
  
const server = http.createServer((req, res) => {
  switch (req.url) {
    case '/':
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      res.end('Hello, World!');
      break;
    case '/users':
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify(users));
      break;
    case '/plant/:id':
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      const plantId = parseInt(req.params.id, 10);
      if (plants.find(u => u.id === parseInt(plantId, 10))) {
        res.end(JSON.stringify(users.find(p => p.id === parseInt(plantId, 10))));
      } else {
        res.statusCode = 404;
        res.end('Plant not found');
      }
      break;
    default:
      res.statusCode = 404;
      res.end('Not found');
  }
});

server.listen(4000, () => {
  console.log('Server started on port 4000');
});




