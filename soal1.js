let text = "";
let jumlahUser;
for (jumlahUser = 1; jumlahUser <= 100; jumlahUser++) {
  text += "User ke - " + jumlahUser + "<br>";
}
document.getElementById("demo1").innerHTML = text;
