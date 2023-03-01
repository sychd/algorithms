/**
 * exp(a,n) = { if n odd, exp(a,n-1)*a; if n even, exp(a, n/2)^2; if n == 0, answer is 1 }
 */

function exp(a, n) {
  if (n === 0) {
    return 1;
  } else if (n % 2 === 0) {
    return Math.pow(exp(a, n / 2), 2);
  } else if (n & (2 !== 0)) {
    return exp(a, n - 1) * a;
  }
}

/**
 * Another approach, where you seek 1 bits in pow's base binary representation, and when bit is 1, you should take it as a^2^index, where a is your number and index is index of bit=1.
 * Description is not the best here, better to google separately.
 */
function exp2(a, n) {
  let res = 1;
  while (n !== 0) {
    //if last bit equals 1
    if (n & 1) {
      res *= a;
    }
    n >>= 1; // shift left for 1 bit (in other words, divide by 2)
    a *= a;
  }

  return res;
}

console.log(exp(2, 10)); // 1024
console.log(exp2(2, 10)); // 1024
