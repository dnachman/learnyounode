var net = require('net')

var server = net.createServer(function(socket) {

  let date = new Date(); 
  let sMonth = date.getMonth() + 1;
  let sDate = date.getFullYear() + '-' + sMonth + '-' + date.getDate() + ' ' + date.getHours() + ':' + date.getMinutes();
  socket.end(sDate + '\n');

});

server.listen(process.argv[2]);