let http = require('http')
let concatStream = require('concat-stream')

let url = process.argv[2]

http.get(url, function(response) {
  response.setEncoding('utf8');

  response.pipe(concatStream(function (data) { 
    // only hit this funciton when all the data has been read
    console.log(data.length);
    console.log(data.toString());
  })); 
  
  //response.on('finish', function() {
}).on('error', function(err) {
  console.log('Got error: ' + err.message);
});
