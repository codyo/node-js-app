// var http = require("http");

// http.createServer(function(req, res){
// 	res.writeHead(200, {'Content-type':'text/plain'});
// 	res.end('Hello!');
// }).listen(60123,'127.0.0.1');
// console.log("webserver has started");


var http = require("http");
var fs = require('fs');

http.createServer(function(req, res){
	fs.readFile("index.html", function(err, data){
		res.writeHead(200, {'Content-type':'text/html'});
		res.end(data);
	});

}).listen(60123,'127.0.0.1');
console.log("webserver has started");