function isSubsequence(subseq, mainStr) {
  let i = 0;
  let j = 0;

  while (j < mainStr.length) {
    if (subseq[i] === mainStr[j]) {
      i++;
    }
    if (i === subseq.length) {
      return true;
    }
    j++;
  }

  return false;
}

// Examples
console.log(isSubsequence("hello", "hello world")); // true
console.log(isSubsequence("sing", "sting")); // true
console.log(isSubsequence("abc", "abracadabra")); // true
console.log(isSubsequence("abc", "acb")); // false (order matters)
