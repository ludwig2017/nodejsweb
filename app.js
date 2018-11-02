var http = require("http");
var fs = require('fs');

http.createServer(function(request, response) {
	var url = request.url;
	switch(url) {
		case '/':
			getStaticFileContent(response, 'public/index.html', 'text/html');
			break;
		case '/home':
			getStaticFileContent(response, 'public/index.html', 'text/html');
			break;
		case '/index':
			getStaticFileContent(response, 'public/index.html', 'text/html');
			break;
		case '/default':
			getStaticFileContent(response, 'public/index.html', 'text/html');
			break;
		case '/about':
			getStaticFileContent(response, 'public/about.html', 'text/html');
			break;
		case '/contact':
			getStaticFileContent(response, 'public/contact.html', 'text/html');
			break;
		case '/team':
			getStaticFileContent(response, 'public/team.html', 'text/html');
			break;
		case '/bootstrapcss':
			getStaticFileContent(response, 'bootstrap/3.3.7/css/bootstrap.min.css', 'text/css');
			break;
		case '/jquery':
			getStaticFileContent(response, 'ajax/libs/jquery/3.2.1/jquery.min.js', 'text/javascript');
			break;
		case '/bootstrapjs':
			getStaticFileContent(response, 'bootstrap/3.3.7/js/bootstrap.min.js', 'text/javascript');
			break;
		default:
			response.writeHead(404, {'Content-Type':'text/plain'});
			response.end('404 - Page not found.')
	}
}).listen(9099);
console.log('Server running at http://localhost:9099');

function getStaticFileContent(response, filepath, contentType) {
	fs.readFile(filepath, function(error, data) {
		if(error) {
			response.writeHead(500, {'Content-Type':'text/plain'});
			response.end('500 - Internal Server Error.');
		}

		if(data) {
			response.writeHead(500, {'Content-Type':'text/html' || 'text/css' || 'text/javascript'});
			response.end(data);
		}
	});
}