/**
 * Euler's function counts the positive integers up to a given integer n that are relatively prime to n.
 */

function gcd(a, b) {
  return b === 0 ? a : gcd(b, a % b);
}

/**
 * O(n*log(n))
 */
function euler(n) {
  let counter = 0;
  for (let i = 1; i <= n; i++) {
    if (gcd(i, n) === 1) {
      counter++;
    }
  }

  return counter;
}

/**
 * Faster option, O(sqrt(n))
 */
function eulerMul(n) {
  let result = n;
  let prime = 2;

  while (n >= prime * prime) {
    if (n % prime === 0) {
      result = (result / prime) * (prime - 1); // (1 - 1/p) = (p-1)/p
      while (n % prime === 0) {
        n /= prime;
      }
    }
    prime++;
  }

  if (n !== 1) {
    result = (result / n) * (n - 1); // (1 - 1/p) = (p-1)/p
  }

  return result;
}

console.log(euler(9)); //6
console.log(eulerMul(9)); //6
console.log(euler(36)); //12
console.log(eulerMul(36)); //12
