// https://leetcode.com/problems/generate-parentheses/
//
// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.
//Input: n = 3
// Output: ["((()))","(()())","(())()","()(())","()()()"]

// https://www.youtube.com/watch?v=s9fokUqJ76A&t=3s&ab_channel=NeetCode
// only add "(" if amount of "(" < n
// only add ")" if amount of ")" < amount of "("
// finished if open == closed == n

var generateParenthesis = function (n) {
  const results = [];
  function backtracking(opened = 0, closed = 0, current = "") {
    if (opened === closed && opened === n) {
      results.push(current);
    }

    if (opened < n) {
      backtracking(opened + 1, closed, current + "(", results);
    }

    if (closed < opened) {
      backtracking(opened, closed + 1, current + ")", results);
    }
  }

  backtracking();
  return results;
};

/**
 * The time complexity of the generateParenthesis function is O(4^n / sqrt(n)) because it generates all possible valid combinations of parentheses of length 2n using a recursive backtracking algorithm.

The function calls itself recursively twice in each iteration of the backtracking function, once to add an opening bracket and once to add a closing bracket. Therefore, there are 2n levels in the recursion tree, with a branching factor of 2 at each level. This gives a total of 2^(2n) possible combinations.

However, not all combinations are valid, since there are only n opening and n closing brackets. The valid combinations are those that have balanced parentheses, meaning that at each point in the recursion, the number of opening brackets is greater than or equal to the number of closing brackets. This constraint reduces the number of possible combinations to the nth Catalan number, which is approximately 4^n / sqrt(n).

Therefore, the time complexity of the function is O(4^n / sqrt(n)), which is an exponential function of n. The space complexity of the function is O(n) because it uses a constant amount of memory for each level of recursion, and there are at most 2n levels in the recursion tree.
 */

console.log(generateParenthesis(5));
