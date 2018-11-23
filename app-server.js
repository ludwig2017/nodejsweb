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
			getStaticFileContent_CSS(response, 'bootstrap/3.3.7/css/bootstrap.min.css', 'text/css');
			break;
		case '/jquery':
			getStaticFileContent_JS(response, 'ajax/libs/jquery/3.2.1/jquery.min.js', 'text/javascript');
			break;
		case '/bootstrapjs':
			getStaticFileContent_JS(response, 'bootstrap/3.3.7/js/bootstrap.min.js', 'text/javascript');
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
			response.writeHead(200, {'Content-Type':'text/plain'});
			response.end('200 - Internal Server Error.');
		}

		if(data) {
			response.writeHead(200, {'Content-Type':'text/html'});
			response.end(data);
		}
	});
}

function getStaticFileContent_JS(response, filepath, contentType) {
	fs.readFile(filepath, function(error, data) {
		if(error) {
			response.writeHead(200, {'Content-Type':'text/javascript'});
			response.end('200 - Internal Server Error.');
		}

		if(data) {
			response.writeHead(200, {'Content-Type':'text/javascript'});
			response.end(data);
		}
	});
}

function getStaticFileContent_CSS(response, filepath, contentType) {
	fs.readFile(filepath, function(error, data) {
		if(error) {
			response.writeHead(200, {'Content-Type':'text/css'});
			response.end('200 - Internal Server Error.');
		}

		if(data) {
			response.writeHead(200, {'Content-Type':'text/css'});
			response.end(data);
		}
	});
}