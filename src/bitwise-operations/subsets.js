/**
 * Generate all subsets of the given set
 *
 * Example: {1,2,3}
 * All subsets:
 * {}    {1,2}
 * {1}   {1,3}
 * {2}   {2,3}
 * {3}   {1,2,3}
 
 *
 * 2 * 2 * 2 = 8 === 2^3
 * 
 * Solution:
 * Bitmask is a sequence of bits. In this case, of three bits. Each bit says whether we have this particular element of our set
 * in the current subset.
 * 
 * { } 000<2> (0<10>)   {1,2}   110<2> (6<10>)
 * {1} 100<2> (4<10>)   {1,3}   101<2> (5<10>)
 * {2} 010<2> (2<10>)   {2,3}   011<2> (3<10>)
 * {3} 001<2> (1<10>)   {1,2,3} 111<2> (7<10>)
 * 
 * Here we see that in <10> it is a set from 0 to 7. We can depict each subset as a number <10> via bitmask and vice versa.
 * So, based on <10> digit we can identify which elements are in subset. For example. 3<10> -> 011<2> -> {2,3}.
 * 
 * So, we can go from 0 to 2^n - 1, tansform each digit to bitmask, map bits to set's items and get the result.
 */

function subsets(set) {
  const n = 1 << set.length; // 2^set.length
  let res = [];

  for (let mask = 0; mask < n; mask++) {
    let subset = [];
    for (let i = 0; i < n; i++) {
      if (mask & (1 << i)) {
        // check if bit equals 1 {@see operations.js}
        subset.push(set[i]);
      }
    }
    res.push(subset);
  }

  return res;
}

const res = subsets([1, 2, 3]);
console.log(res, res.length);
