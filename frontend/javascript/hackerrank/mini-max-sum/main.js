// Mini-Max Sum
// - Problem Solving (Basic)
// - Difficulty: Easy

/*
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

// Full Problem: https://www.hackerrank.com/challenges/mini-max-sum/problem

function miniMaxSum(arr) {
  // Write your code here
  // TODO: answer here
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  var min = sum - arr[0];
  var max = sum - arr[0];
  for (var i = 1; i < arr.length; i++) {
    var tempSum = sum - arr[i];
    if (tempSum < min) {
      min = tempSum;
    } else if (tempSum > max) {
      max = tempSum;
    }
  }
  return [min, max];
}

function main() {
  //arr = readLine().split(' ');
  //arr = arr.map(Number);
  var arr = [1, 2, 3, 4, 5]; // override input
  let result = miniMaxSum(arr);
  console.log(result);
}

main(); // execute program

module.exports = miniMaxSum;
