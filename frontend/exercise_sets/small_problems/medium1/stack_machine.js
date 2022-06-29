// Program that implements stack and register functionality.

// - Split string into list of tokens
// - Initialize an empty stack and register of 0
// - Iterate through the list
//   - Compare each token to a list of commands
//   - Execute the command that matches that token

// If there is an underflow, halt the program and output an error message
// If the token is not a valid command halt and output error message
const COMMANDS = ['PUSH', 'POP', 'ADD', 'SUB', 'MULT', 'DIV', 'REMAINDER', 'PRINT'];
const POP_COMMANDS = ['POP', 'ADD', 'SUB', 'MULT', 'DIV', 'REMAINDER'];


function minilang(program) {
  const commands = program.split(' ');
  const stack = [];
  let register = 0;

  const invalidCommand = parseForValidity(commands);
  if (invalidCommand) {
    console.log(`The command, ${invalidCommand} is not valid.`)
    return;
  }

  for (command of commands) {
    if (isUnderflow(command, stack)) {
      console.log('Error: Trying to remove value from empty stack');
      return;
    }

    switch (command) {
      case 'PUSH':
        stack.push(register);
        break;
      case 'POP':
        register = stack.pop();
        break;
      case 'ADD':
        register += stack.pop();
        break;
      case 'SUB':
        register -= stack.pop();
        break;
      case 'MULT':
        register *= stack.pop();
        break;
      case 'DIV':
        register = Math.floor(register / stack.pop());
        break;
      case 'REMAINDER':
        register %= stack.pop();
        break;
      case 'PRINT':
        console.log(register);
        break;
      default:
        register = Number(command);
    }
  }
}

function parseForValidity(commands) {
  return commands.find(command => {
    return !COMMANDS.includes(command) && isNaN(command)
  });
}

function isUnderflow(command, stack) {
  return POP_COMMANDS.includes(command) && stack.length === 0;
}

minilang('5 PUSH POP POP');

// minilang('5 PUSH 3 INVALID');

minilang('PRINT');
// 0

minilang('5 PUSH 3 MULT PRINT');
// 15

minilang('5 PRINT PUSH 3 PRINT ADD PRINT');
// 5
// 3
// 8

minilang('5 PUSH POP PRINT');
// 5

minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT');
// 5
// 10
// 4
// 7

minilang('3 PUSH PUSH 7 DIV MULT PRINT');
// 6

minilang('4 PUSH PUSH 7 REMAINDER MULT PRINT');
// 12

minilang('-3 PUSH 5 SUB PRINT');
// 8

minilang('6 PUSH');
// (nothing is printed because the `program` argument has no `PRINT` commands)
