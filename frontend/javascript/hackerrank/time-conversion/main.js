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
  var time = s.split(":");
  var hour = parseInt(time[0]);
  var minute = time[1];
  var second = time[2];
  var ampm = time[3];
  if (ampm === "PM") {
    if (hour !== 12) {
      hour += 12;
    }
  }
  if (ampm === "AM" && hour === 12) {
    hour = 0;
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
