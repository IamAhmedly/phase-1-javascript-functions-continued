// code your solution here
function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`;
}
function mondayWork(activity = "go to the office") {
  return `This Monday, I will ${activity}.`;
}

function wrapAdjective(symbol) {
  return function (adjective) {
    return `You are ${symbol}${adjective}${symbol}!`;
  };
}

let result = wrapAdjective("*");
let emphatic = result("a hard worker");
console.log(emphatic);
// defines wrapAdjective function according to the specification
// 4) function exists
// 5) when initialized with '*' creates a function that, when called, wraps an adjective in a highlight
// 6) when initialized with '||' creates a function that, when called, wraps an adjective in a highlight
