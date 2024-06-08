const sumContigousSubArray = (array, target) => {
  let sum = 0;
  let start = 0;

  for (let end = 0; end < array.length; end++) {
    sum += array[end];

    while (sum > target && start <= end) {
      sum -= array[start];
      start++;
    }

    if (sum === target) {
      return true;
    }
  }
  return false;
};

console.log(sumContigousSubArray([4, 2, 7, 1, 9, 5], 27));
