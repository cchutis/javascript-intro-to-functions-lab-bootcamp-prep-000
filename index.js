function shout(string) {
  return string.toUpperCase();
}

function whisper(string) {
  return string.toLowerCase();
}

function logShout(string) {
  return console.log(string.toUpperCase());
}

function logWhisper(string) {
  return console.log(string.toLowerCase());
}

function sayHiToGrandma(string) {
  var text = string;
  if (text === string.toLowerCase()) {
    return console.log("I can\'t hear you!");
  } else if (text === string.toUpperCase()) {
    return console.log("YES INDEED!");
  } else if (text === "I love you, Grandma.") {
    return console.log("I love you, too.");
  }
}
