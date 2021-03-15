module.exports = function check(str, bracketsConfig) {
  // your solution

  let rules = {};
  let opposites = {};

  for (var i = 0; i < bracketsConfig.length; i++) {
    let el = bracketsConfig[i];
    if (el[0] == el[1]) {
      rules[el[0]] = 1;
      opposites[el[0]] = el[0];
    }
    else {
      rules[el[0]] = +1; 
      rules[el[1]] = -1;
      opposites[el[0]] = el[1];
      opposites[el[1]] = el[0];
    }
  }
  // console.log("rules", rules);
  // console.log("opp", opposites);

  stack = [];

  for (var i = 0; i < str.length; i++) {

    let bracket = str[i];
    
    if (rules[bracket] > 0) {
      stack.push(bracket);
      // if (opposites[bracket] === bracket) { rules[bracket] = -rules[bracket]};
    } else {
      popElem = stack.pop()
      if (popElem != opposites[bracket]) {return false;}
      // if (opposites[bracket] === bracket) { rules[bracket] = -rules[bracket]};
    }
    if (opposites[bracket] === bracket) { rules[bracket] = -rules[bracket]};
    // console.log("stack", stack);
    // console.log("bracket", bracket);
  }
  if (stack.length != 0) {
    return false;
  } else {return true;}
}
