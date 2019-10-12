module.exports = function check(str, bracketsConfig) {
  let stack=[];
  let openBrackets = [];
  let closedBrackets = [];

  if (str.length % 2 !== 0){
    return false;
  }

  for (let i = 0; i < str.length; i++) {
    stack.push(str[i]);
  }

  for (let i = 0; i < bracketsConfig.length; i++) {
    openBrackets.push(bracketsConfig[i][0]);
    closedBrackets.push(bracketsConfig[i][1]);
  }

  for (let i = stack.length - 1; i >= 0; i--) {
    for (let j = 0; j < openBrackets.length; j++) {
        if (stack[i] === openBrackets[j] && stack[i + 1] === closedBrackets[j]) {
           stack.splice(i, 2);
            }
        }
    }

  if (stack.length === 0) {
    return true; 
  }else{
    return false;
  }
}
