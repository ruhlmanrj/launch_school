// Takes a string as input and outputs it within a box.

function outerLine(string) {
  let middleSection = string.replace(/./g, '-');
  return `+-${middleSection}-+`;
}

function innerLine(string) {
  let middleSection = string.replace(/./g, ' ');
  return `| ${middleSection} |`;
}

function middleLine(string) {
  return `| ${string} |`
}

function logInBox(message) {
  let messageLines = [
    outerLine(message),
    innerLine(message),
    middleLine(message),
    innerLine(message),
    outerLine(message)
  ];

  messageLines.forEach(line => console.log(line));
}

logInBox('To boldly go where no one has gone before.');


// Further Exploration
//
// Implement a solution that takes a maximum width and wrap the content being output
// within that width appropriately.


function logInBox(message, width) {
  width = determineWidth(message, width);

  console.log(outerLine(width));
  console.log(innerLine(width));
  printMiddleLines(message, width);
  console.log(innerLine(width));
  console.log(outerLine(width));
}


function determineWidth(message, width) {
  if (!width) {
    return message.length + 4;
  } else if (width < 5){
    return 5;
  } else {
    return width;
  }
}

function printMiddleLines(message, width) {
  let messageWidth = width - 4;
  let currentLine = '';

  for (let i = 0; i < message.length; i++) {
    currentLine += message[i];

    if (currentLine.length === messageWidth || (i === message.length - 1)) {
      printMiddleLine(currentLine, messageWidth);
      currentLine = '';
    }
  }
}

function printMiddleLine(content, width) {
  if (content.length < width) {
    content = appendWithSpaces(content, width - content.length);
  }
    console.log(`| ${content} |`);
}

function appendWithSpaces(string, nSpaces) {
  while (nSpaces > 0) {
    string += ' ';
    nSpaces--
  }

  return string;
}

function outerLine(width) {
  let numDashes = width - 2;
  let dashes = '';
  for (let n = 1; n <= numDashes; n++) {
    dashes += '-';
  }

  return `+${dashes}+`;
}

function innerLine(width) {
  let numSpaces = width - 2;
  let spaces = '';
  for (let n = 1; n <= numSpaces; n++) {
    spaces += ' ';
  }

  return `|${spaces}|`;
}
