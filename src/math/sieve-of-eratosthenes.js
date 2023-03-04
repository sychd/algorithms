/**
 * Find all primes (simple numbers) 1..n
 * Optimization
 * -Actually, we can go through not 1..n, but through 1.. sqrt(n), as it will cover all the cases of prime numbers 1..n
 * -we can ignore all even numbers except 2, so we reduce twice
 * -to save memory we can use bits instead of array of booleans
 */

function sieve(n) {
  let mark = new Array(100).fill(true);
  let primes = [2];

  // start from 3 as 1 we skip, 2 we skip (as we have i += 2 to ignore all even numbers)
  //i * i <= n - 1..sqrt(n) optimization
  for (let i = 3; i * i <= n; i += 2) {
    if (mark[i]) {
      // we start not from i, but from i*i because we passed before this numbers (with previous prime numbers)
      for (let j = i * i; j < n; j += i) {
        // if it is dividable, then it is not prime
        mark[j] = false;
      }
    }
  }
  for (let i = 3; i < n; i += 2) {
    if (mark[i]) primes.push(i);
  }

  return primes;
}

console.log(sieve(100));
