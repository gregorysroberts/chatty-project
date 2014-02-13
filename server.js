var messages = ["first message here", "greg is my name"];

var onRequest = function (request, response) {
	console.log(request.method);
	response.writeHead(200, {
		'Connection': 'close',
		'Content-type': 'text/html',
		'Access-Control-Allow-Origin': '*'
	});

	if (request.method == 'GET') {
		response.end(JSON.stringify(messages));
    console.log("GET")
	} 
  else if (request.method == 'POST') {
    console.log("POST")
    var postData = '';
    request.on('data', function(chunk) {
    postData += chunk.toString();
   });
    request.on('end', function() {
      console.log("Got POST data:");
      console.log(JSON.parse(postData));
      var message = JSON.parse(postData).message;
      messages.push(message);
      response.end(JSON.stringify(messages));
   });
  }
};
 


http = require('http');

http.createServer(onRequest).listen(12200);


