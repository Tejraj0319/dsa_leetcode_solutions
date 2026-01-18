/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let str = s.toLowerCase();
  let newStr = "";
  let reversedStr = "";
  for (let i = 0; i < str.length; i++) {
    if ((str[i] >= "a" && str[i] <= "z") || (str[i] >= "0" && str[i] <= "9")) {
      newStr += str[i];
    }
  }

  for (let i = newStr.length - 1; i >= 0; i--) {
    reversedStr += newStr[i];
  }
  return newStr === reversedStr;
};
