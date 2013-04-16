// beacon.js

var http = require('http'),
    url = require('url'),
    config = require('./config').config;


function processRaw(obj) {
  process.nextTick(function() {
    console.log('raw');
  });
};


function processStat(obj) {
  process.nextTick(function() {
    console.log('stat');
  });
};


function beacon (req) {

  process.nextTick(function(){

    console.log('>>>');
    console.log('> header_host: ' + req.headers[config.header_host]);
    console.log('> header_clientip: ' + req.headers[config.header_clientip]);
    
    var query = url.parse(req.url, true).query;
    for (var p in query) {
      console.log('> ' + p + ': ' + query[p]);
    }
    console.log('>>>');

    new processRaw(req);
    new processStat(req);

  });
};



http.createServer(function (req, res) {

  new beacon(req);

  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('');
  console.log('Done ' + req.url);

}).listen(8888, '127.0.0.1');

console.log('Server running at http://127.0.0.1:8888/');
