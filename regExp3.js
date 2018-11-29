// function panggilRegExp() {
//   let data = "Belajar Satu Tahun Bersama Niomic";
//
//   console.log(/Satu/.test(data));
// }
//
//
// panggilRegExp();



// tugas
function panggilRegExp(value) {
  if (/javascript/.test(value) === true) {
    console.log(value.replace(/javascript/,""));
  } else if (/php/.test(value) === true) {
    console.log(value.replace(/php/,""));
  } else {
    console.log(value);
  }
}


panggilRegExp("Belajar html");
panggilRegExp("Belajar javascript");
panggilRegExp("Belajar css");
panggilRegExp("Belajar php");
