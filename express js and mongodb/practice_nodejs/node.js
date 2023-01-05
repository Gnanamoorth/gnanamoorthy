var http = require('http');
http.createServer(function (req, res) {
  if ( req.url=='/login'){
  res.writeHead(200, {"content-type":"text/html"})
  res.write("<h1>This is Login Page</h1>")
  res.end()
}
else{
  res.write("Page is not Found")
  res.end()
}
}).listen(8081);

console.log('Server running at http://127.0.0.1:8081/');