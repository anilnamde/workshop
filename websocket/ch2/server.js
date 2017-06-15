var WebSocketServer = require('ws').Server;

var wss = new WebSocketServer({port: 8181});


wss.on('connection', function (ws) {
  console.log('client connected');

  var counter = 0;
  var interval = setInterval(function () {
    counter = counter + 1;
    ws.send(counter);
  }, 1000);


  ws.on('message', function (message) {
    console.log(message);
  });

  ws.on('close', function () {
    clearInterval(interval);
    console.log('client closed');
  });

});