function sameFrequency(num1, num2) {
  const strNum1 = num1.toString();
  const strNum2 = num2.toString();

  // Early exit if the lengths are different
  if (strNum1.length !== strNum2.length) return false;

  const countNum1 = {};
  const countNum2 = {};

  // Count frequency of each digit in the first number
  for (let digit of strNum1) {
    countNum1[digit] = (countNum1[digit] || 0) + 1;
  }

  // Count frequency of each digit in the second number
  for (let digit of strNum2) {
    countNum2[digit] = (countNum2[digit] || 0) + 1;
  }

  // Compare the frequency of digits
  for (let key in countNum1) {
    if (countNum1[key] !== countNum2[key]) {
      return false;
    }
  }

  return true;
}

// Examples
console.log(sameFrequency(182, 281)); // true
console.log(sameFrequency(34, 14)); // false
console.log(sameFrequency(3589578, 5879385)); // true
console.log(sameFrequency(22, 222)); // false
