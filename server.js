var messages = [
  {message: "first message here"}, 
  {message: "greg is my name"}
];

onRequest = function (request, response) {

  console.log("Got request:", request.method, new Date)
  response.writeHead(200, {
    'Connection': 'close',
    'Content-type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  });

	if (request.method == 'GET') {
		response.end(JSON.stringify(messages));
	}

  else if (request.method == 'POST') {
    var postData = '';

    request.on('data', function(chunk) {
      postData += chunk.toString();
    });

    request.on('end', function() {
      var message = JSON.parse(postData);
      messages.push(message);

      response.end(JSON.stringify(messages));
   });
  }
  if (request.method === 'OPTIONS') {
    response.writeHead(200, {
      'Connection': 'close',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
    });
    response.end("{}");
  }
};
 


http = require('http');

http.createServer(onRequest).listen(12200);


