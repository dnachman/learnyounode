let http = require('http')
let url= require('url')
 

var server = http.createServer(function(req, res) {
  //console.log(req);

  if (req.method == 'GET') {
    //console.log(req.url);
    if (req.url) {
      if (req.url.startsWith('/api/parsetime')){
        var dateString = url.parse(req.url, true)['query']['iso'];
        //console.log(dateString);

        res.writeHead(200, { 'Content-Type': 'application/json' });

         let date = new Date(dateString);
         let responseObj = {
           "hour" : date.getHours(),
           "minute" : date.getMinutes(),
           "second" : date.getSeconds()
         };

         res.end(JSON.stringify(responseObj));

      }
      else if (req.url.startsWith('/api/unixtime')) {
        var dateString = url.parse(req.url, true)['query']['iso'];
        res.writeHead(200, { 'Content-Type': 'application/json' });

        res.end(JSON.stringify({'unixtime': new Date(dateString).getTime()}));
      }
    }
    

    res.end();

  }

});

server.listen(Number(process.argv[2]));