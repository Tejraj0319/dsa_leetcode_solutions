/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let k = 0;
    for(let i = 0; i < t.length; i++){
        if(s[k] === t[i]){
            k++;
        }
    }
    return k === s.length;
};