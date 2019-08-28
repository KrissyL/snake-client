const { connect } = require('./client');
console.log('Connecting ...');
connect();

// makes sure you're able to exit with ctrl+c once in the game
const handleUserInput = function(key) {
  if (key === '\u0003') {
    process.exit();
  }
};
// setup User Interface to handle input through stdin
const setupInput = function() {

  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', handleUserInput);
  return stdin;
};
setupInput();