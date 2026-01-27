/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    const result = [];
    for (let i = 0; i <= rowIndex; i++) {
        const row = new Array();
        for (let j = 0; j <= i; j++) {
            if (j === 0 || j === i) {
                row[j] = 1;
            }
            else {
                row[j] = result[i - 1][j - 1] + result[i - 1][j];
            }
        }
        result.push(row);
    }
    return result[rowIndex];
};