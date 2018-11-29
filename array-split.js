function panggilSplit() {
  var kalimat = "kita sedang belajar js";
  console.log(kalimat);

  var result = kalimat.split(" ");              // memisahkan string menjadi array dengan spasi sbg pembatasnya

  return result;
}


console.log(panggilSplit());
