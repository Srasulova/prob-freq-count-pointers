function longestFall(arr) {
  if (arr.length === 0) return 0;

  let maxLength = 1;
  let currentLength = 1;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) {
      currentLength++;
    } else {
      maxLength = Math.max(maxLength, currentLength);
      currentLength = 1; // Reset to 1 because a new sequence might start here
    }
  }

  // Final check after the loop to ensure the longest fall is updated
  maxLength = Math.max(maxLength, currentLength);

  return maxLength;
}

// Examples
console.log(longestFall([5, 3, 1, 3, 0])); // 3
console.log(longestFall([2, 2, 1])); // 2
console.log(longestFall([2, 2, 2])); // 1
console.log(longestFall([5, 4, 4, 4, 3, 2])); // 3
console.log(longestFall([9, 8, 7, 6, 5, 6, 4, 2, 1])); // 5
console.log(longestFall([])); // 0
