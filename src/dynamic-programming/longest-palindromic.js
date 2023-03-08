//
// https://leetcode.com/problems/longest-palindromic-substring/
/**
 * Given a string s, return the longest palindromic substring in s.
 */

// NOT DP, but brute force
// start from full string, check whetner it is a palindrome
// Then do -1 char, do checks again with shift on one letter
// Do this (-n char, n letter shifts) until you hit the palindrome

// jilololopm
// [jilololopm]
// [jilololop]m, j[ilololopm]
// [jilololo]pm, j[ilololop]m, ji[jilololopm]
// [jilolol]opm, j[ilololo]pm, ji[lololop]m, jil[lololopm]
// [jilolo]lopm, j[ilolol]opm, ji[lololo]pm, jil[ololop]m,  jilo[ololopm]
// [jilol]olopm, j[ilolo]lopm, ji[lolol]opm (HIT), ...

function isPalindrome(s) {
  for (let i = 0; i < s.length / 2; i++) {
    if (s[i] !== s[s.length - 1 - i]) {
      return false;
    }
  }
  return true;
}
// O(n^3)
/**
 * The time complexity of the isPalindrome function is O(n/2), or simply O(n) since it iterates through half of the characters in the input string.
 * The time complexity of the longestPalindrome function is O(n^3) in the worst case. The outer loop iterates from scope=s.length to scope=2, which takes O(n) time. The inner loop iterates from shift=0 to shift=s.length - scope, which also takes O(n) time. Within the inner loop, the substring method takes O(scope) time to create a substring, and the isPalindrome function takes O(scope) time to check if the substring is a palindrome. Therefore, the overall time complexity is O(n * n * n) = O(n^3).
 */
var longestPalindrome = function (s) {
  let scope = s.length;

  while (scope > 1) {
    let shift = 0;
    while (scope + shift <= s.length) {
      const substr = s.substring(shift, scope + shift);
      if (isPalindrome(substr)) {
        return substr;
      }
      shift++;
    }
    scope--;
  }

  return s[0];
};

// https://www.youtube.com/watch?v=UflHuQj6MVA&ab_channel=TECHDOSE
// we can have next alg: substring is a palindrome if 1) its start and its end are equal and 2) substring betwee start and end letter is a palindrome
// we start from each letter is 1-sized palindrome and go forth
// we'll note the history of results in 2d array (see the video for a good explanataion)
var longestPalindromeDP = function (s) {
  let palindrome = "";
  let results = new Array(s.length).fill().map((v) => []);
  for (let substrLen = 0; substrLen < s.length; substrLen++) {
    let start = 0;
    let end = substrLen;
    while (end < s.length) {
      if (s[start] === s[end]) {
        // substrLen < 2 to initialize first two diagonals
        if (substrLen < 2 || results[start + 1][end - 1]) {
          results[start][end] = true;
          palindrome = s.substring(start, end + 1);
        }
      }
      start++;
      end++;
    }
  }

  return palindrome;
};
// console.log(longestPalindrome("aaaabbaa")); // aabbaa
// console.log(longestPalindrome("ghbabadc")); // bab
// console.log(longestPalindrome("babad"));// bab or aba
// console.log(longestPalindrome("cbbd")); // bb
// console.log(longestPalindrome("a")); // a
// console.log(longestPalindrome("fbcde")); // f
// console.log(longestPalindrome("babwbaabwbabawwoodoowlbab")); // babwbaabwbab
// console.log(longestPalindrome("babaddosbabababbdbd")); //bababab
// console.log(longestPalindrome("hkdvmgagjkgagagl")); // gagag
// console.log(longestPalindrome("lrkdnqlggwprtl")); // gg
// console.log(longestPalindrome("lrkdkrlnqlggwprtl")); // lrkdkrl
// console.log(longestPalindrome("lfjtnrlggllrkdkrlnqlggwprtl")); // lrkdkrl
// console.log(longestPalindrome("jilolololololopm")); // olololololo

// console.log(longestPalindromeDP("aaaabbaa")); // aabbaa
// console.log(longestPalindromeDP("ghbabadc")); // bab
// console.log(longestPalindromeDP("babad")); // bab or aba
// console.log(longestPalindromeDP("cbbd")); // bb
// console.log(longestPalindromeDP("a")); // a
// console.log(longestPalindromeDP("fbcde")); // f
// console.log(longestPalindromeDP("babwbaabwbabawwoodoowlbab")); // babwbaabwbab
// console.log(longestPalindromeDP("babaddosbabababbdbd")); //bababab
// console.log(longestPalindromeDP("hkdvmgagjkgagagl")); // gagag
// console.log(longestPalindromeDP("lrkdnqlggwprtl")); // gg
// console.log(longestPalindromeDP("lrkdkrlnqlggwprtl")); // lrkdkrl
// console.log(longestPalindromeDP("lfjtnrlggllrkdkrlnqlggwprtl")); // lrkdkrl
// console.log(longestPalindromeDP("jilolololololopm")); // olololololo
