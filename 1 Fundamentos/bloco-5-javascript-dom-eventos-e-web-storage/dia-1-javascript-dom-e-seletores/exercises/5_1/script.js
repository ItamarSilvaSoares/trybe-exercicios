document.getElementById("header-container").style.backgroundColor = "#00B069";
let noEmergency = document.querySelectorAll(".no-emergency-tasks h3");
let emergency = document.querySelectorAll(".emergency-tasks h3");
for (index = 0; index < noEmergency.length; index += 1) {
  noEmergency[index].style.backgroundColor = "black";
  emergency[index].style.backgroundColor = "#A400F3";
}
document.getElementsByClassName("emergency-tasks")[0].style.backgroundColor =
  "#FF9F84";
document.getElementsByClassName("no-emergency-tasks")[0].style.backgroundColor =
  "#F9DA5D";

as = document.getElementById("footer-container").style.backgroundColor =
  "#003532";
console.log(as);
