<h2>Result for Reference</h2>

```
chintzruparel@Chintzs-Air NodeJS-Tutorials % node append-file.js
Saved!
chintzruparel@Chintzs-Air NodeJS-Tutorials % node rename-file.js
File Renamed!
chintzruparel@Chintzs-Air NodeJS-Tutorials % node delete-file.js
File deleted!
```



Step 1 - Add File - `e9b137f` <br>
Step 2 - Rename File - `47882278` <br>
Step 3 - Delete File - `f804a2c` <br>


Reference
```
http.createServer(function (request, response) {
   // Send the HTTP header 
   // HTTP Status: 200 : OK
   // Content Type: text/plain
   response.writeHead(200, {'Content-Type': 'text/plain'});
   
   // Send the response body as "Hello World"
   response.end('Hello World\n');
}).listen(8081);

// Console will print the message
console.log('Server running at http://127.0.0.1:8081/');

```


Reference 2 

```
var http = require("http");
```

Reference

```
var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World!');
}).listen(8080);
```

Reminders 
ce8ddd2 - Remove grunt 

Reference 3 

```
var jwt = require('jsonwebtoken');
var token = jwt.sign({ foo: 'bar' }, 'shhhhh');
```

Reference for alpha Vantage Stock API

```
<body>
  <script src="path/to/alphavantage/dist/bundle.js"></script>
  <script type="application/javascript">
    /**
     * Init Alpha Vantage with your API key.
     *
     * @param {String} key
     *   Your Alpha Vantage API key.
     */
    const alpha = alphavantage({ key: 'qweqweqwe' });
  </script>
</body>
```
