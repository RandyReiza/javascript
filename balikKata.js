function balikKata(kata) {
  //return kata.split("").reverse().join("");             // contoh dari Niomic

  var arr = kata.split("");
  var arr2 = "";
  for (var i = arr.length-1; i >= 0; i--) {              // hasil tugas dengan cara lain
    arr2 = arr2 + arr[i];
  }
  return arr2;
}


console.log(balikKata("Niomic!"));
console.log(balikKata("JavaScript"));
console.log(balikKata("alohahola"));
console.log(balikKata("Jawa_Barat"));
