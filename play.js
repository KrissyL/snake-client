const net = require('net');

//  make a connection with the game server

 const connect = function() {
  const conn = net.createConnection({ 
    host: '192.168.88.151',
    port: 50541
  });
//   handles incoming data and console logs it
  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });
  // turn data into text
  conn.setEncoding('utf8'); 

  return conn;
}

console.log('Connecting ...');
connect();