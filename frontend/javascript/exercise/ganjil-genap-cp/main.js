/*
Buatlah sebuah program untuk melakukan cek pada plat nomer yang ada
Setiap plat nomer di pisahkan oleh karakter ";"
- jika paramater kosong maka akan menampilkan "invalid data"
- jika paramater merupakan string kosong maka akan menampilkan "plat tidak ditemukan"
- jika paramater terdapat plat ganjil dan tidak ada plat genap maka akan menampilkan "plat ganjil sebanyak <jumlah plat> dan plat genap tidak ditemukan"
- jika paramater terdapat plat genap dan tidak ada plat ganjil maka akan menampilkan "plat genap sebanyak <jumlah plat> dan plat ganjil tidak ditemukan"
- jika paramater terdapat plat ganjil maupun genap maka akan menampilkan "plat genap sebanyak <jumlah plat> dan plat ganjil sebanyak <jumlah plat>"
*/

function ganjilGenap(plat) {
  // TODO: answer here
  if (plat === "") {
    return "invalid data";
  }
  var platArr = plat.split(";");
  var platLength = platArr.length;
  var countOdd = 0;
  var countEven = 0;
  var result = "";
  for (var i = 0; i < platLength; i++) {
    if (platArr[i].length === 5) {
      if (platArr[i][2] === "0") {
        countOdd++;
      } else {
        countEven++;
      }
    }
  }
  if (countOdd > 0 && countEven === 0) {
    result =
      "plat ganjil sebanyak " + countOdd + " dan plat genap tidak ditemukan";
  }
  if (countEven > 0 && countOdd === 0) {
    result =
      "plat genap sebanyak " + countEven + " dan plat ganjil tidak ditemukan";
  }
  if (countOdd > 0 && countEven > 0) {
    result =
      "plat genap sebanyak " +
      countEven +
      " dan plat ganjil sebanyak " +
      countOdd;
  }
  return result;
}

console.log(ganjilGenap("2341;3429;864;1309;1276")); //plat genap sebanyak 2 dan plat ganjil sebanyak 3
console.log(ganjilGenap("2347;3429;1305")); //plat ganjil sebanyak 3 dan plat genap tidak ditemukan
console.log(ganjilGenap("864;1308;1276;1432")); //plat genap sebanyak 4 dan plat ganjil tidak ditemukan
console.log(ganjilGenap("")); //plat tidak ditemukan
console.log(ganjilGenap()); //invalid data

module.exports = ganjilGenap;
