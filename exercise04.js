// Write an efficient method that tells us whether or not an input string brackets ("{", "}", "(", ")", "[", "]") opened and closed properly.
// Example: “{[]}” => true, “{(])}” => false, “{([)]}” => false

function bracketsMatch(str) {
  const stack = [];
  const brackets = {
    "{": "}",
    "(": ")",
    "[": "]",
  };
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (brackets[char]) {
      stack.push(char);
    } else if (char === "}" || char === ")" || char === "]") {
      if (brackets[stack.pop()] !== char) {
        return false;
      }
    }
  }
  return stack.length === 0;
}

console.log(bracketsMatch("{[]}"));
