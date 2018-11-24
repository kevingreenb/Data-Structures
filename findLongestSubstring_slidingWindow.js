{
let str = "longestsubstring"

function findLongestSubstring(str) {
  let longest = 0;
  let seen = {};
  let start = 0;
  let char = "";
  for (let i = 0; i < str.length; i++) {
    char = str[i];
    if (seen[char]) {
      start = Math.max(start, seen[char]);
    }
    longest = Math.max(longest, i - start + 1);
    seen[char] = i + 1;
  }
  return longest;
}

    findLongestSubstring(str);
}
