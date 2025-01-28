// see all button for third section
function addField() {
  var newcontents = document.getElementById("see_all_contents");
  var contents = document.getElementById("contents");
  newcontents.appendChild(contents.cloneNode(true));
}
// header  menu for mobile
function menuFunction() {
  document.getElementById("onlymobile").style.display = "none";
  document.getElementById("crossicon").style.display = "block";
  document.getElementById("headerText").style.display = "none";
  document.getElementById("mobile_menu").style.display = "block";
  document.getElementById("main").style.backgroundColor = "black";
}
