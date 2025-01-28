// see all button for third section
document.getElementById("seeAllBtn").addEventListener("click", function() {
  // var newcontents = document.getElementById("see_all_contents");
  // var contents = document.getElementById("contents");
  // newcontents.appendChild(contents.cloneNode(true));
  document.getElementById("see_all_contents").style.display = "block";
// if(see_all_contents.style.display === "none"){
//   this.innerHTML="See All";
//   this.id="seeAllBtn";
// }

// else(see_all_contents.style.display === "block")
// {

//   this.innerHTML="View Less";
//   this.id="viewLessBtn";
//   document.getElementById("see_all_contents").style.display = "block";
// }

  this.innerHTML="View Less";
  this.id="viewLessBtn";
  document.getElementById("viewLessBtn").addEventListener("click", function() {
    document.getElementById("see_all_contents").style.display = "none";
    this.innerHTML="See All";
      this.id="seeAllBtn";

  });
});



// header  menu for mobile
function menuFunction() {
  document.getElementById("onlymobile").style.display = "none";
  document.getElementById("crossicon").style.display = "block";
  document.getElementById("headerText").style.display = "none";
  document.getElementById("mobile_menu").style.display = "block";
  document.getElementById("main").style.backgroundColor = "black";
}

// hide mobile menu 
document.getElementById("crossicon").addEventListener("click", function() {

  document.getElementById("onlymobile").style.display = "block";
  document.getElementById("crossicon").style.display = "none";
  document.getElementById("headerText").style.display = "block";
  document.getElementById("mobile_menu").style.display = "none";
  document.getElementById("main").style.backgroundColor = "#00000066";
});