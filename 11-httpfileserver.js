let http = require('http')
let fs = require('fs')

var server = http.createServer(function(req, res) {
  //console.log('About to read: ' + process.argv[3]);
  let fileStream = fs.createReadStream(process.argv[3]);

  fileStream.pipe(res);


});

server.listen(Number(process.argv[2]));