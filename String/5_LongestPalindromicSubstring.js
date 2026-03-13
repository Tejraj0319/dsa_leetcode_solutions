var longestPalindrome = function(s) {
    let res = "";

    const expand = (l, r) => {
        while (l >= 0 && r < s.length && s[l] === s[r]) {
            if (r - l + 1 > res.length) {
                res = s.substring(l, r + 1);
            }
            l--;
            r++;
        }
    };

    for (let i = 0; i < s.length; i++) {
        expand(i, i);     // odd palindrome
        expand(i, i + 1); // even palindrome
    }

    return res;
};