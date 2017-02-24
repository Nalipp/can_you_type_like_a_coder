const fs = require('fs');
const http = require('http');

let server = http.createServer(function(req, res) {
  switch (req.url) {
    case '/':
      serveIndex(res);
      break;
    case '/favicon.ico':
      serveFavicon(res);
      break;
    case '/js/script.js':
      serveJavaScript(res);
      break;
    case '/css/style.css':
      serveCSS(res);
      break;
    case '/images/trash-can.png':
      serveTrashImage(res);
      break;
    default: 
      pageNotFound(res);
      break;
  }
});

function serveIndex(res) {
  fs.readFile('static/index.html', (err, data) => {
    if (err) console.log("couldn't read javaScript file");       
    res.end(data);
  });
}

function serveFavicon(res) {
  fs.readFile('static/favicon.ico', (err, data) => {
    if (err) console.log(err);
    res.end(data);
  });
}

function serveJavaScript(res) {
  fs.readFile('static/js/script.js', (err, data) => {
    if (err) console.log("couldn't read javaScript file");
    res.end(data);
  });
}

function serveCSS(res) {
  fs.readFile('static/css/style.css', (err, data) => {
    if (err) console.log("couldn't read CSS file");
    res.end(data);
  });
}

function serveTrashImage(res) {
  fs.readFile('static/images/trash-can.png', (err, data) => {
    if (err) console.log("couldn't read trash can image");
    res.end(data);
  });
}

function pageNotFound(res) {
  res.statusCode = 404;
  res.end("Opps there's nothing here");
}


server.listen(8000, () => console.log('running on 8000'));

