const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;
const timer = 300;

let indexHTML = '';
let bootstrapCSS = '';
let customCSS = '';
let jqueryJS = '';
let bootstrapJS = '';
let customJS = '';

uptodate();

function uptodate() {
	var gtimex = new Date().toLocaleTimeString();
	console.log(`Server running at http://${hostname}:${port}/ | ${gtimex}`);

	fs.readFile('public/index.html', function (errINDEX, htmlINDEX) {
		if (errINDEX) {
			throw errINDEX;
		}
		indexHTML = htmlINDEX;
	});

	fs.readFile('bootstrap/3.3.7/css/bootstrap.min.css', function (errBOOTSTRAP_CSS, cssBOOTSTRAP) {
		if (errBOOTSTRAP_CSS) {
			throw errBOOTSTRAP_CSS;
		}
		bootstrapCSS = cssBOOTSTRAP;
	});

	fs.readFile('public/css/custom.css', function (errCUSTOM_CSS, cssCUSTOM) {
		if (errCUSTOM_CSS) {
			throw errCUSTOM_CSS;
		}
		customCSS = cssCUSTOM;
	});

	fs.readFile('ajax/libs/jquery/3.2.1/jquery.min.js', function (errJQUERY, jsJQUERY) {
		if (errJQUERY) {
			throw errJQUERY;
		}
		jqueryJS = jsJQUERY;
	});

	fs.readFile('bootstrap/3.3.7/js/bootstrap.min.js', function (errBOOTSTRAP_JS, jsBOOTSTRAP) {
		if (errBOOTSTRAP_JS) {
			throw errBOOTSTRAP_JS;
		}
		bootstrapJS = jsBOOTSTRAP;
	});

	fs.readFile('public/js/custom.js', function (errCUSTOM_JS, jsCUSTOM) {
		if (errCUSTOM_JS) {
			throw errCUSTOM_JS;
		}
		customJS = jsCUSTOM;
	});

	setTimeout(function(){ uptodate(); }, 2000);
}

const server = http.createServer((req, res) => {
	res.statusCode = 200;

	if(req.url.indexOf('bootstrap.min.css') != -1){
		res.writeHead(200, {'Content-Type': 'text/css'});
		res.write(bootstrapCSS);
		res.end();
		return;
	}

	if(req.url.indexOf('custom.css') != -1){
		res.writeHead(200, {'Content-Type': 'text/css'});
		res.write(customCSS);
		res.end();
		return;
	}

	if(req.url.indexOf('jquery.min.js') != -1){
		res.writeHead(200, {'Content-Type': 'text/javascript'});
		res.write(jqueryJS);
		res.end();
		return;
	}

	if(req.url.indexOf('bootstrap.min.js') != -1){
		res.writeHead(200, {'Content-Type': 'text/javascript'});
		res.write(bootstrapJS);
		res.end();
		return;
	}

	if(req.url.indexOf('custom.js') != -1){
		res.writeHead(200, {'Content-Type': 'text/javascript'});
		res.write(customJS);
		res.end();
		return;
	}

	res.writeHeader(200, {"Content-Type": "text/html"});  
	res.write(indexHTML);
	res.end();
});

server.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}/`);
});