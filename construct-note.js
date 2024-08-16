function constructNote(message, letters) {
  const letterCount = {};
  const messageCount = {};

  // Count frequency of each letter in the letters string
  for (let char of letters) {
    letterCount[char] = (letterCount[char] || 0) + 1;
  }

  // Count frequency of each letter in the message string
  for (let char of message) {
    messageCount[char] = (messageCount[char] || 0) + 1;
  }

  // Check if message can be constructed
  for (let char in messageCount) {
    if (!letterCount[char] || letterCount[char] < messageCount[char]) {
      return false;
    }
  }

  return true;
}

// Examples
console.log(constructNote("aa", "abc")); // false
console.log(constructNote("abc", "dcba")); // true
console.log(constructNote("aabbcc", "bcabcaddff")); // true
