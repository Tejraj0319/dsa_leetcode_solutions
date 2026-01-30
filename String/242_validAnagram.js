/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    let cleanS = s.split("").sort().join('');
    let cleanT = t.split("").sort().join('');
    return cleanS === cleanT;
};