/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    const vowels = new Set(['a','e','i','o','u','A','E','I','O','U']);
    const stack = [];
    for(let char of s){
        if(vowels.has(char)){
            stack.push(char);
        }
    }

    let str = "";
    for(let char of s){
        if(vowels.has(char)){
            str += stack.pop();
        }
        else{
            str += char
        }
    }
    return str;
};