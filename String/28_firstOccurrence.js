var strStr = function (haystack, needle) {
  if (needle.length === 0) return 0;
  let pointerOne = 0;
  let pointerTwo = 0;

  for (let i = 0; i < haystack.length; i++) {
    if (haystack[pointerOne] === needle[pointerTwo]) {
      pointerOne++;
      pointerTwo++;
      if (pointerTwo === needle.length) {
        return pointerOne - pointerTwo;
      }
    } else {
      pointerOne = i - 1;
      pointerTwo = 0;
    }
  }
  return -1;
};
