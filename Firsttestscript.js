var http = require('http');

//create a server object:
http.createServer(function (req, res) {
  res.write('ooooooooooooo'); //write a response to the client
  res.end(); //end the response
}).listen(8080); //the server object listens on port 8080

//This code will paste the data into the browser 

//https://AverageHarshFilesize.chintzruparel.repl.co