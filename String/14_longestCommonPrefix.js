/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (strs.length === 0) return "";
  strs.sort();
  let firstWord = strs[0];
  let lastWord = strs[strs.length - 1];
  let prefix = "";
  for (let i = 0; i < firstWord.length && lastWord.length; i++) {
    if (firstWord[i] === lastWord[i]) {
      prefix += firstWord[i];
    } else {
      break;
    }
  }
  return prefix;
};
