var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
  fs.readFile('testfile.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(8080);

//Here you have to create a .html file which js can read from here

// PS. Change file name in line 4 