// packages
const http = require('http');
const fs = require('fs');
// server properties
const hostname = '127.0.0.1';
const port = 3000;
const timer = 300;

//should trigger atualize function every timer parameter
let htmlfile = '';
let cssfile = '';
let jsfile = '';

uptodate();

// should read file from the disk for html
function uptodate()
{
  console.log(`Server running at http://${hostname}:${port}/`);
   fs.readFile('public/index.html', function (err, html) {
    if (err) {
      throw err; 
    }       
    htmlfile = html;
  });
  // should read css from the disk for css
  fs.readFile('bootstrap/3.3.7/css/bootstrap.min.css', function (err, html) {
    if (err) {
      throw err; 
    }       
    cssfile = html;
  });

  fs.readFile('public/css/custom.css', function (err, html) {
    if (err) {
      throw err; 
    }       
    cssfile = html;
  });

  // should read js file from the disk
  fs.readFile('ajax/libs/jquery/3.2.1/jquery.min.js', function (err, html) {
    if (err) {
      throw err; 
    }       
    jsfile = html;
  });

  fs.readFile('bootstrap/3.3.7/js/bootstrap.min.js', function (err, html) {
    if (err) {
      throw err; 
    }       
    jsfile = html;
  });

  fs.readFile('public/js/custom.js', function (err, html) {
    if (err) {
      throw err; 
    }       
    jsfile = html;
  });
  setTimeout(function(){ uptodate(); }, 1000);
}
const server = http.createServer((req, res) => {
  res.statusCode = 200;

  // should send css and js
  if(req.url.indexOf('.css') != -1){ //req.url has the pathname, check if it conatins '.js'
   res.writeHead(200, {'Content-Type': 'text/css'});
   res.write(cssfile);
   res.end();
   return;
  }
  if(req.url.indexOf('.js') != -1){ //req.url has the pathname, check if it conatins '.js'
   res.writeHead(200, {'Content-Type': 'text/javascript'});
   res.write(jsfile);
   res.end();
   return;
  }
  // should send html file via request
  res.writeHeader(200, {"Content-Type": "text/html"});  
  res.write(htmlfile);
  res.end();
});

// should send css and js 

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});