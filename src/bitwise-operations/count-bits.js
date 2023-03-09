// https://leetcode.com/problems/counting-bits/

// O(n*log(n))
var countBits = function (n) {
  let res = [];
  for (let i = 0; i <= n; i++) {
    let count = 0;
    let num = i;
    while (num > 0) {
      if (num % 2 !== 0) {
        count++;
      }
      num = num >> 1;
    }
    res.push(count);
  }

  return res;
};

// O(n), taken from https://leetcode.com/problems/counting-bits/solutions/79539/three-line-java-solution/
/**
 * <1>the last digit ( 1 or 0, which is " i&1 ", equivalent to " i%2 " )
 * <2>the other digits ( the number of 1, which is " res[i >> 1] ", equivalent to " res[i/2] " )
 */
var countBits2 = function (n) {
  let res = new Array(n).fill(0);
  for (let i = 0; i <= n; i++) {
    console.log(res);
    console.log(i, res[i >> 1] + (i & 1));
    res[i] = res[i >> 1] + (i & 1);
  }
  return res;
};

console.log(countBits(5));
console.log(countBits2(5));
