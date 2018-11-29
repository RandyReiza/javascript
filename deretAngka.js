function deretAngka(n) {
  var hasil = "";
  for (var i = 1; i <= n; i++) {
    if (i % 3 === 0) {
      hasil = hasil + "NIO ";
    } else if (i % 5 === 0){
      hasil = hasil + "MIC ";
    } else {
      hasil = hasil + i + " ";
    }
  }

  return hasil;
}


console.log(deretAngka(10));
console.log(deretAngka(20));
console.log(deretAngka(30));
