// see all button for third section
// document.getElementById("seeAllBtn").addEventListener("click",seeall);
 
//  function seeall(event){
//   // lessView();
//   console.log("innerseeall")
//   event.target.innerHTML="View Less";
//   event.target.id="viewLessBtn";
//   // document.getElementById("seeAllBtn").innerHTML="View Less";
//   document.getElementById("see_all_contents").style.display = "block";
//   // document.getElementById("seeAllBtn").id="viewLessBtn";
//   document.getElementById("viewLessBtn").addEventListener("click",lessView);
//   console.log("afterclick less view")
// }


// function lessView(event){
//   console.log("innerlessview");
//   event.target.innerHTML="See All";
//   // document.getElementById("viewLessBtn").innerHTML="See All";
//   event.target.id="seeAllBtn";
//   // document.getElementById("viewLessBtn").id="seeAllBtn";
//   document.getElementById("see_all_contents").style.display = "none";
//   console.log("viewless"+this.id);
//   event.target.addEventListener("click", recursive);
//   // document.getElementById("seeAllBtn").addEventListener("click",seeall);
//   console.log("seeall"+this.id);
// }
// function recursive(event){
//   console.log("final"+this.id)
//   document.getElementById("see_all_contents").style.display = "block";
//   event.target.innerHTML="View Less";
//   event.target.id="viewLessBtn";
//   console.log("afterclick less view")
//   document.getElementById("viewLessBtn").addEventListener("click",lessView);
// }





// const seemore= document.getElementById("seeAllBtn");
// seemore.addEventListener("click",()=>{
//   seemore.innerHTML="View Less";
//   seemore.id="viewLessBtn";
//   document.getElementById("see_all_contents").style.display = "block";
// })

// const viewless = document.getElementsByClassName('.more');
// viewless.addEventListener("click",()=>{
//   viewless.innerHTML="See All";
//   viewless.id="seeAllBtn";
//   document.getElementById("see_all_contents").style.display = "none";
// })


document.getElementById("seeAllBtn").addEventListener("click", seeMore);

function seeMore(event) {
  let content = document.getElementById("see_all_contents");
  
  if (content.style.display == "none") {
    content.style.display = "block";
    event.target.innerHTML = "View Less";
  } else {
    content.style.display = "none";
    event.target.innerHTML = "See All";
  }
}

document.getElementById("mobile_seeAllBtn").addEventListener("click", MobileseeMore);

function MobileseeMore(event) {
  let content = document.getElementById("see_all_contents");
  
  if (content.style.display == "none") {
    content.style.display = "block";
    event.target.innerHTML = "View Less";
  } else {
    content.style.display = "none";
    event.target.innerHTML = "See All";
  }
}



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