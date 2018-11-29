function panggilObjects() {
  var mobil = {
    type: 'Sedan',
    harga: 200000000,
    warna: 'Putih',
    tahun: [2001,2002,2003,2004]      // array dalam object
  }

  console.log(mobil);
  console.log(mobil.type);
  console.log(mobil.tahun[3]);      // panggil array dalam object
}


panggilObjects();
