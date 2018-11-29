function panggilSplice() {
  var kota = ['jakarta', 'medan', 'padang', 'malang'];
  console.log(kota);

  // kota.splice(2,0,'palembang');             // add value tapi ditemtukan mau di index mana
  kota.splice(2,1);                            // hapus value dari index yang ditentukan
  return kota;
}


console.log(panggilSplice());
