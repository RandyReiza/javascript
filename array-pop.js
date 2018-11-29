function panggilPop() {
  var kota = ["jakarta", "bandung", "malang", "surabaya", 'makassar'];
  console.log(kota);
  console.log("=================");

  // kota = kota.pop();


  var kota2 = kota.pop();         // menghapus value array paling akhir
  console.log(kota2);

  return kota;
}


console.log(panggilPop());
