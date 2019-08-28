const net = require('net');
const { IP, PORT } = require('./constants');

// make a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });
  // notifies you once a connection is established
  conn.on('connect', () => {
    console.log('You are now connected to the game server');
    conn.write('Name: N3R');
    // Writes Move: Up message to the server on connection
    //conn.write('Move: up');
  });
  // handles incoming data and console logs it
  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });
  // turn data into text
  conn.setEncoding('utf8');

  return conn;
};
// export the function using ES6 object shorthand
module.exports.connect = connect;