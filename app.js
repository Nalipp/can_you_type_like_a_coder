const fs = require('fs');
const http = require('http');

let server = http.createServer(function(req, res) {
  if (req.url === '/') {
    serveStatic('/index.html', res)
  } else {
    serveStatic(req.url, res);
  }
});

function serveStatic(path, res) {
  fs.readFile('static' + path, (err, data) => {
    if (err) pageNotFound(res); 
    res.end(data);
  });
}

function pageNotFound(res) {
  res.statusCode = 404;
  res.end("Opps there's nothing here");
}

server.listen(5000, () => console.log('running on 5000'));

