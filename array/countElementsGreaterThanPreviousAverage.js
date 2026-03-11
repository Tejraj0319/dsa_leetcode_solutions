function countResponseTimeRegressions(responseTimes) {
    // Write your code here
    let sum = responseTimes[0];
    let count = 0;
    for(let i = 1; i < responseTimes.length; i++){
        let avg = sum/i;
        if(avg < responseTimes[i]){
            count++;
        }
        sum += responseTimes[i];
    }
    return count;
}

// | Index | Element | Previous Elements | Average of Previous | Condition  | Count |
// | ----- | ------- | ----------------- | ------------------- | ---------- | ----- |
// | 0     | 2       | —                 | —                   | Skipped    | 0     |
// | 1     | 5       | [2]               | 2                   | 5 > 2 ✅    | 1     |
// | 2     | 1       | [2,5]             | (2+5)/2 = 3.5       | 1 > 3.5 ❌  | 1     |
// | 3     | 8       | [2,5,1]           | (2+5+1)/3 = 2.67    | 8 > 2.67 ✅ | 2     |
// | 4     | 3       | [2,5,1,8]         | (2+5+1+8)/4 = 4     | 3 > 4 ❌    | 2     |
