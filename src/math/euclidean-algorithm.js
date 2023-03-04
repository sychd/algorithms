/**
 * Find biggest common divider and least common multiple (BCD and LCM).
 * Complexity: O(log(min(m,n)))
 *
 */
function gcd(a, b) {
  return b === 0 ? a : gcd(b, a % b);
}

function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

console.log(gcd(15, 24));
console.log(lcm(15, 24));
