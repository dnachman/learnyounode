var fs = require('fs')

var buffer = fs.readFileSync(process.argv[2]).toString();

var arrayNewLines = buffer.split('\n');

// no newline at end, but split will give that last chunk so remove 1
console.log(arrayNewLines.length - 1);