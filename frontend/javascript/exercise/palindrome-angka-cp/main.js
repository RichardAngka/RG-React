/**
 * Carilah angka palindrome yang LEBIH BESAR dan TERDEKAT dari angka-angka dibawah ini
 *
 * Misal:
 * - Jika angka pada parameter bernilai 90 maka angka palindrome terdekat adalah 99
 * - Jika angka pada parameter bernilai 102 maka angka palindrome terdekat adalah 111
 */

function angkaPalindrome(num) {
  // TODO: answer here
  var num = num + 1;
  while (true) {
    var numString = num.toString();
    var numReverse = numString.split("").reverse().join("");
    if (numString === numReverse) {
      return num;
    }
    num++;
  }
}

console.log(angkaPalindrome(10)); //11
console.log(angkaPalindrome(17)); //22
console.log(angkaPalindrome(175)); //181

module.exports = angkaPalindrome;
