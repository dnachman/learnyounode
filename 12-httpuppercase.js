let http = require('http')
let t2map = require('through2-map')
 

var server = http.createServer(function(req, res) {

  if (req.method == 'POST') {
    req.pipe(t2map(function (chunk) {
      return String(chunk).toUpperCase()
    })).pipe(res);
  }

});

server.listen(Number(process.argv[2]));