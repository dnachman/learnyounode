let http = require('http')
let concatStream = require('concat-stream')

let urls = [ process.argv[2], process.argv[3], process.argv[4] ]
let responses = new Array(3)
let count = 0

function getData(index) {
  http.get(urls[index], function(response) {
    response.setEncoding('utf8');

    response.pipe(concatStream(function (data) { 
      //console.log('HTTP Return: ' + data.toString());
      responses[index] = data.toString();
      count++;
      //console.log('Array set: ' + count + '('+ index + ') :' + responses[i]);
      if (count == 3) {
        printResponses();
      }
    })); 
  });
}

function printResponses() {
  
  responses.forEach( function(element) {
    console.log(element);
  });
}

for (var i = 0; i < 3; i++) {
  getData(i);
}

