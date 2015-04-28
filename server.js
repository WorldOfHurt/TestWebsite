//Carlton Johnson 4/26/2015

//requirements
var
http = require('http'),
path = require('path'),
fs = require('fs'),
 
//supported file types/extensions
extensions = {
	".html" : "text/html",
	".css" : "text/css",
	".js" : "application/javascript",
	".png" : "image/png",
	".gif" : "image/gif",
	".jpg" : "image/jpeg",
	".jpeg" : "image/jpeg"
};
 
//getFile function handles file verification
function getFile(filePath,res,page404,mimeType){
	//does the requested file exist?
	fs.exists(filePath,function(exists){
		//if it exists
		if(exists){
			//read the file
			fs.readFile(filePath,function(err,contents){
				if(!err){
					//if there was no error then send it with the default 200/ok header
					res.writeHead(200,{
						"Content-type" : mimeType,
						"Content-Length" : contents.length
					});
					res.end(contents);
				} else {
					//print the error to console
					console.dir(err);
				};
			});
		} else {
			//if the requested file was not found
			fs.readFile(page404,function(err,contents){
				//and there was no error
				if(!err){
					//go to 404 page
					res.writeHead(404, {'Content-Type': 'text/html'});
					res.end(contents);
				} else {
					//print the error to console
					console.dir(err);
				};
			});
		};
	});
};
 
//handling HTTP requests
function requestHandler(req, res) {
	var
	fileName = path.basename(req.url) || 'index.html',
	ext = path.extname(fileName),
	localFolder = __dirname + '/public/',
	page404 = localFolder + '404.html';
 
	//check extensions for correct file type
	if(!extensions[ext]){
		//go to 404 page
		res.writeHead(404, {'Content-Type': 'text/html'});
		res.end("&lt;html&gt;&lt;head&gt;&lt;/head&gt;&lt;body&gt;The requested file type is not supported&lt;/body&gt;&lt;/html&gt;");
	};
 
	//call getFile function
	getFile((localFolder + fileName),res,page404,extensions[ext]);
};
 
//create the server and listen on port 5000
http.createServer(requestHandler).listen(5000);
