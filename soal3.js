let text2 = "";
let angka;
for (let angka = 0; angka < 20; angka++) {
  if (angka % 2 == 1) {
    text2 += "angka " + angka + " adalah ganjil" + "<br>";
  } else if (angka % 2 === 0) {
    text2 += "angka " + angka + " adalah genap" + "<br>";
  }
}
document.getElementById("demo3").innerHTML = text2;
