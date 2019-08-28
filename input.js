// Stores the active TCP connection object.
let connection;

// makes sure you're able to exit with ctrl+c once in the game
const handleUserInput = function(key) {
    if (key === '\u0003') {
    process.exit();
  }
  if (key === 'w') {
    connection.write('Move: up');
  }
  if (key === 'a') {
    connection.write('Move: left');
  }
  if (key === 'd') {
    connection.write('Move: right');
  }
  if (key === 's') {
    connection.write('Move: down');
  }
  if (key === 'f') {
    connection.write('Say: hey');
  }
  if (key === 'r') {
    connection.write('Say: ouch');
  }
};
  // setup User Interface to handle input through stdin
const setupInput = function(conn) {
    
  connection = conn;
  
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', handleUserInput);
  return stdin;
};

module.exports.setupInput = setupInput;