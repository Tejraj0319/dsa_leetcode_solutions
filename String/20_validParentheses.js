var isValid = function (s) {
  let stack = [];

  for (let element of s) {
    if (element === "(" || element === "{" || element === "[") {
      stack.push(element);
    } else {
      let last = stack.pop();
      if (
        (element === ")" && last !== "(") ||
        (element === "}" && last !== "{") ||
        (element === "]" && last !== "[")
      ) {
        return false;
      }
    }
  }
  return stack.length === 0;
};
