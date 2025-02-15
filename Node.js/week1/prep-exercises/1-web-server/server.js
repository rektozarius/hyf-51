/**
 * Exercise 3: Create an HTTP web server
 */
const fsPromises = require('fs/promises')
const http = require('http');
const path = require('path');
const port = 3000;

//create a server
let server = http.createServer(function (req, res) {
	if (req.url === '/') {
		res.setHeader('Content-Type', 'text/html');
		fsPromises.readFile(path.join(__dirname,'/index.html')).then((result) => {
			res.write(result);
			res.end();
		});
	} else if (req.url === '/index.js') {
		res.setHeader('Content-Type', 'application/javascript');
		fsPromises.readFile(path.join(__dirname,'/index.js')).then((result) => {
			res.write(result);
			res.end();
		});
	} else if (req.url === '/style.css') {
		res.setHeader('Content-Type', 'text/css');
		fsPromises.readFile(path.join(__dirname,'/style.css')).then((result) => {
			res.write(result);
			res.end();
		});
	}
});

server.listen(port, () => {
  console.log(`Web server app listening on port ${port}`)
})