let ask;
let totalClick = 0;
do {
  ask = confirm("Apakah Anda mau mengulang?");
  totalClick++;
} while (ask == true);

document.getElementById(
  "demo4"
).innerHTML = `User sudah melakukan klik ok sebanyak ${totalClick - 1} kali`;
