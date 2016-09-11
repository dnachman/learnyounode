let filteredLs = require('./6-io-module');

filteredLs(process.argv[2], process.argv[3], (err, data) => {
  if (err) console.log(err);
  data.forEach((str) => {
    console.log(str);
  });
});