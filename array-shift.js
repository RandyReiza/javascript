function panggilShift() {
  var kota = ["jakarta", "bandung", "malang", "surabaya", 'makassar'];
  console.log(kota);
  console.log("=================");

  // kota = kota.shift();


  var kota2 = kota.shift();         // menghapus value array paling awal
  console.log(kota2);

  return kota;
}


console.log(panggilShift());
