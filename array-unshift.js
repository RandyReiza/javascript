function panggilUnshift() {
  var data = ['bandung', 'jakarta', 'medan', 'malang'];
  console.log(data);

  data.unshift('surabaya', 'bali');                 // add value di awal index

  return data;

}


console.log(panggilUnshift());
