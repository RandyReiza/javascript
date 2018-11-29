function panggilPerintahMap() {
  var datakota = ["jakarta", "balikpapan", "medan"];


  // datakota.map((item, index, array) => {                   // contoh cara penulisan function ke-1
  //   console.log(item);
  //   console.log(index);
  //   console.log(array);
  // });



  datakota.map(function(item, index, array){                  // contoh cara penulisan function ke-2
    console.log(item);
    console.log(index);
    console.log(array);
  })
}


panggilPerintahMap();
