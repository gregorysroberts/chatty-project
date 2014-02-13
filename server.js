var messages = ["first message here", "greg is my name"];

var onRequest = function (request, response) {

	if (request.method == 'GET') {
		response.end(JSON.stringify(messages));
	}

  else if (request.method == 'POST') {
    var postData = '';

    request.on('data', function(chunk) {
      postData += chunk.toString();
    });

    request.on('end', function() {
      var message = JSON.parse(postData).message;
      messages.push(message);

      response.writeHead(200, {
      'Connection': 'close',
      'Content-type': 'text/html',
      'Access-Control-Allow-Origin': '*'
      });

      response.end(JSON.stringify(messages));
   });
  }
};
 


http = require('http');

http.createServer(onRequest).listen(12200);


