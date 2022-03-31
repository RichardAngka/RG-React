// Time Conversion
// - Problem Solving (Basic)
// - Difficulty: Easy

/*
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

// Full Problem: https://www.hackerrank.com/challenges/time-conversion/problem

function timeConversion(s) {
  // Write your code here
  // TODO: answer here
  var hour = parseInt(s.slice(0, 2));
  var minute = s.slice(3, 5);
  var second = s.slice(6, 8);
  var ampm = s.slice(8, 10);
  if (ampm === "AM") {
    if (hour === 12) {
      hour = "0" + 0;
    }
  }
  if (ampm === "PM") {
    if (hour < 12) {
      hour += 12;
    }
  }
  return hour + ":" + minute + ":" + second;
}

function main() {
  //var s = readLine();
  var s = "07:05:45PM"; // override input
  var result = timeConversion(s);
  console.log(result);
}

main(); // execute program

module.exports = timeConversion;
