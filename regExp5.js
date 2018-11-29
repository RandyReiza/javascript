function panggilRegExp(value) {
  // var ambilData = value.match(/ke/g);           // ambil karakter "ke" pada sebuah string
  // console.log(ambilData);


  // var ambilData = value.match(/[ke]/g);           // ambil karakter "k" dan "e" pada sebuah string
  // console.log(ambilData);


  // var ambilData = value.match(/[^ke]/g);           // ambil semua karakter kecuali "k" dan "e" pada sebuah string
  // console.log(ambilData);


  var ambilData = value.match(/[a-i]/g);           // ambil semua karakter antara alfabet a sampai i pada sebuah string
  console.log(ambilData);
}

panggilRegExp("Bulan ke 1 sd ke 4");
