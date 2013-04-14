/* beacon.js
*/
var http = require('http');
var url = require('url');


function processRaw(obj) {
  process.nextTick(function() {
    console.log('Raw: ' + obj);
  });
};


function processStat(obj) {
  process.nextTick(function() {
    console.log('Stat: ' + obj );
  });
};

function beacon (url) {

  process.nextTick(function(){

    console.log('Beacon: ' + url);

    new processRaw(url);
    new processStat(url);

  });
};



http.createServer(function (req, res) {

  new beacon(req.url);

  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('');
  console.log('Done ' + req.url);

}).listen(8888, '127.0.0.1');

console.log('Server running at http://127.0.0.1:8888/');
