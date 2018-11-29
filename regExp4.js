function panggilRegExp(value) {
  // var ambilData = value.match(/\w/g);            // "/w" untuk mengambil semua karakter kecuali spasi dari sebuah string
  // console.log(ambilData);


  // var ambilData = value.match(/\d/g);           // "/d" untuk mengambil semua angka dari sebuah string
  // console.log(ambilData);


  // var ambilData = value.match(/\s/g);             // "/s" untuk mengambil semua spasi dari sebuah string
  // console.log(ambilData);
  // console.log("Banyaknya Spasi: ", ambilData.length);


  // var ambilData = value.match(/\W/g);           // "/W" untuk mengambil semua spasi dari sebuah string
  // console.log(ambilData);


  // var ambilData = value.match(/\D/g);           // "/D" untuk mengambil semua karakter dan spasi kecuali angka dari sebuah string
  // console.log(ambilData);


  var ambilData = value.match(/\S/g);           // "/S" untuk mengambil semua karakter kecuali spasi dari sebuah string
  console.log(ambilData);
}


panggilRegExp("Bulan ke 1 sd ke 4");
