var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(req.url);
  res.end();
}).listen(8080);

//Query Needs to be added post /

//Test here - https://averageharshfilesize.chintzruparel.repl.co/test

//Result - /test