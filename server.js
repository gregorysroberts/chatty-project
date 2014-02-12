var messages = ["first message here", "greg is my name"];

var onRequest = function (req, response) {
	console.log(req.method);
	response.writeHead(200, {
		'Connection': 'close',
		'Content-type': 'text/html',
		'Access-Control-Allow-Origin': '*'
	});

	if (req.method == 'GET') {
		response.end(JSON.stringify(messages));
	} else if (req.method == 'POST') {
   var postData = '';
   req.on('data', function(chunk) {
    postData += chunk.toString();
   });
   req.on('end', function() {
    console.log("Got POST data:");
    console.log(JSON.parse(postData));
    messages.push(postData.message);
   });
  }
};
 


http = require('http');

http.createServer(onRequest).listen(12200);


