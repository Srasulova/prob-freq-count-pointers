function pivotIndex(arr) {
  let totalSum = arr.reduce((acc, num) => acc + num, 0);
  let leftSum = 0;

  for (let i = 0; i < arr.length; i++) {
    // Calculate right sum by subtracting left sum and current element from total sum
    let rightSum = totalSum - leftSum - arr[i];

    // Check if left sum equals right sum
    if (leftSum === rightSum) {
      return i;
    }

    // Update left sum for the next iteration
    leftSum += arr[i];
  }

  return -1; // No valid pivot index found
}

// Examples
console.log(pivotIndex([1, 2, 1, 6, 3, 1])); // 3
console.log(pivotIndex([5, 2, 7])); // -1
console.log(pivotIndex([-1, 3, -3, 2])); // 1
