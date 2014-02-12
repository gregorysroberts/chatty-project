var messages = ["message", "greg"];

var onRequest = function (req, res) {
	console.log(req.method);
	res.writeHead(200, {
		'Connection': 'close',
		'Content-type': 'text/html',
		'Access-Control-Allow-Origin': '*'
	});
	res.end(JSON.stringify(messages));
};

http = require('http');
var port = 12200;
http.createServer(onRequest).listen(port);
console.log("listening on " + port);

