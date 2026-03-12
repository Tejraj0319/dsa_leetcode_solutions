function isAlphabeticPalindrome(code) {
    // Write your code here
    const filtered = code.replace(/[^a-zA-Z]/g, "").toLowerCase();
    let left = 0;
    let right = filtered.length - 1;
    while (left < right) {
        if (filtered[left] != filtered[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}