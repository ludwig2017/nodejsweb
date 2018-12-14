const http = require("http");
const fs = require('fs');

const hostname = 'localhost';
const port = 9099;
const timer = 300;

uptodate();

http.createServer(function(request, response) {
	var url = request.url;
	switch(url) {

		// page view
		case '/':
			getStaticFileContent(response, 'resources/views/index.html', 'text/html');
			break;
		case '/home':
			getStaticFileContent(response, 'resources/views/index.html', 'text/html');
			break;
		case '/index':
			getStaticFileContent(response, 'resources/views/index.html', 'text/html');
			break;
		case '/default':
			getStaticFileContent(response, 'resources/views/index.html', 'text/html');
			break;
		case '/about':
			getStaticFileContent(response, 'resources/views/about.html', 'text/html');
			break;
		case '/contact':
			getStaticFileContent(response, 'resources/views/contact.html', 'text/html');
			break;
		case '/team':
			getStaticFileContent(response, 'resources/views/team.html', 'text/html');
			break;

		// bootstrap CSS
		case '/bootstrapcss':
			getStaticFileContent_CSS(response, 'bootstrap/3.3.7/css/bootstrap.min.css', 'text/css');
			break;

		// GlyphIcons
		case '/glyphiconsEOT':
			getStaticFileContent_EOT(response, 'bootstrap/3.3.7/fonts/glyphicons-halflings-regular.eot', 'application/vnd.ms-fontobject');
			break;
		case '/glyphiconsEOT_iefix':
			getStaticFileContent_EOT(response, 'bootstrap/3.3.7/fonts/glyphicons-halflings-regular.eot?#iefix', 'application/vnd.ms-fontobject');
			break;
		case '/glyphiconsWOFF2':
			getStaticFileContent_WOFF(response, 'bootstrap/3.3.7/fonts/glyphicons-halflings-regular.woff2', 'application/font-woff');
			break;
		case '/glyphiconsWOFF':
			getStaticFileContent_WOFF(response, 'bootstrap/3.3.7/fonts/glyphicons-halflings-regular.woff', 'application/font-woff');
			break;
		case '/glyphiconsTTF':
			getStaticFileContent_TTF(response, 'bootstrap/3.3.7/fonts/glyphicons-halflings-regular.ttf', 'application/octet-stream');
			break;
		case '/glyphiconsSVG':
			getStaticFileContent_SVG(response, 'bootstrap/3.3.7/fonts/glyphicons-halflings-regular.svg#glyphicons_halflingsregular', 'image/svg+xml');
			break;

		// Default and Custom css
		case '/stylecss':
			getStaticFileContent_CSS(response, 'resources/assets/css/style.css', 'text/css');
			break;
		case '/customcss':
			getStaticFileContent_CSS(response, 'public/css/custom.css', 'text/css');
			break;

		// fontawsome css
		case '/fontawesome':
			getStaticFileContent_CSS(response, 'ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css', 'text/css');
			break;

		// jQuery
		case '/jquery':
			getStaticFileContent_JS(response, 'ajax/libs/jquery/3.2.1/jquery.min.js', 'text/javascript');
			break;

		// bootstrap JS
		case '/bootstrapjs':
			getStaticFileContent_JS(response, 'bootstrap/3.3.7/js/bootstrap.min.js', 'text/javascript');
			break;

		// Default and Custom JS
		case '/scriptjs':
			getStaticFileContent_JS(response, 'resources/assets/js/script.js', 'text/javascript');
			break;
		case '/customjs':
			getStaticFileContent_JS(response, 'public/js/custom.js', 'text/javascript');
			break;

		// Image JPEG
		case '/mapJPG':
			getStaticFileContent_JPEG(response, 'resources/assets/images/w3images/map.jpg', 'image/jpeg');
			break;
		case '/sanfranJPG':
			getStaticFileContent_JPEG(response, 'resources/assets/images/w3images/sanfran.jpg', 'image/jpeg');
			break;
		case '/newyorkJPG':
			getStaticFileContent_JPEG(response, 'resources/assets/images/w3images/newyork.jpg', 'image/jpeg');
			break;
		case '/parisJPG':
			getStaticFileContent_JPEG(response, 'resources/assets/images/w3images/paris.jpg', 'image/jpeg');
			break;

		// Error
		default:
			response.writeHead(404, {'Content-Type':'text/plain'});
			response.end('404 - Page not found.')
	}
}).listen(port, hostname);
let gtimex = new Date().toLocaleTimeString();
let utc = new Date().toJSON().slice(0,10).replace(/-/g,'/');
console.log(`Server running at http://${hostname}:${port}/ | ${utc} | ${gtimex}`);

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
			response.writeHead(200, {'Content-Type':'text/plain'});
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
			response.writeHead(200, {'Content-Type':'text/plain'});
			response.end('200 - Internal Server Error.');
		}

		if(data) {
			response.writeHead(200, {'Content-Type':'text/css'});
			response.end(data);
		}
	});
}

function getStaticFileContent_JPEG(response, filepath, contentType) {
	fs.readFile(filepath, function(error, data) {
		if(error) {
			response.writeHead(200, {'Content-Type':'text/plain'});
			response.end('200 - Internal Server Error.');
		}

		if(data) {
			response.writeHead(200, {'Content-Type':'image/jpeg'});
			response.end(data);
		}
	});
}

function getStaticFileContent_EOT(response, filepath, contentType) {
	fs.readFile(filepath, function(error, data) {
		if(error) {
			response.writeHead(200, {'Content-Type':'text/plain'});
			response.end('200 - Internal Server Error.');
		}

		if(data) {
			response.writeHead(200, {'Content-Type':'application/vnd.ms-fontobject'});
			response.end(data);
		}
	});
}

function getStaticFileContent_WOFF(response, filepath, contentType) {
	fs.readFile(filepath, function(error, data) {
		if(error) {
			response.writeHead(200, {'Content-Type':'text/plain'});
			response.end('200 - Internal Server Error.');
		}

		if(data) {
			response.writeHead(200, {'Content-Type':'application/font-woff'});
			response.end(data);
		}
	});
}

function getStaticFileContent_TTF(response, filepath, contentType) {
	fs.readFile(filepath, function(error, data) {
		if(error) {
			response.writeHead(200, {'Content-Type':'text/plain'});
			response.end('200 - Internal Server Error.');
		}

		if(data) {
			response.writeHead(200, {'Content-Type':'application/octet-stream'});
			response.end(data);
		}
	});
}

function getStaticFileContent_SVG(response, filepath, contentType) {
	fs.readFile(filepath, function(error, data) {
		if(error) {
			response.writeHead(200, {'Content-Type':'text/plain'});
			response.end('200 - Internal Server Error.');
		}

		if(data) {
			response.writeHead(200, {'Content-Type':'image/svg+xml'});
			response.end(data);
		}
	});
}

function uptodate() {
	var gtimex = new Date().toLocaleTimeString();
	var utc = new Date().toJSON().slice(0,10).replace(/-/g,'/');
	console.log(`Server running at http://${hostname}:${port}/ | ${utc} | ${gtimex}`);
	setTimeout(function(){ uptodate(); }, 2000);
}