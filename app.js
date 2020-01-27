/* jQuery for the navigation animation */

var $hamburger = $(".hamburger");
  $hamburger.on("click", function(e) {
    $hamburger.toggleClass("is-active");
    // Do something else, like open/close menu
  });

  /* Code for the toggling of the navbar */

let toggleNavStatus = false;

let toggleNav = function () {
    let getSidebar = document.querySelector(".navbar-menu");
    let getSidebarUL = document.querySelector(".side-nav ul");
    let getSidebarLinks = document.querySelectorAll(".side-nav a");
    let getSidebarVisibility = document.querySelector(".side-nav");

    if (toggleNavStatus === false) {

      getSidebarVisibility.style.visibility = "visible"

      getSidebarLinks.forEach((item, index)=>{
        console.log(item);
        item.style.opacity = "1";
        item.style.visibility = "visible";
        });
      getSidebar.style.width = "60%";

      toggleNavStatus = true;
    } 

    else if (toggleNavStatus === true) {

         getSidebarLinks.forEach((item, index)=>{
          item.style.opacity = "0";
          item.style.transitionDelay = "0s";
          item.style.visibility = "hidden";
         });
        getSidebar.style.width = "0";

        toggleNavStatus = false;
    }
}

/* Modals collected in variables */

var $modalHome = $(".modal-home");
var $modalNewHome = $(".modal-new-home");
var $modalRoom = $(".modal-room");
var $modalStairs = $(".modal-stairs");
var $modalVictorian2 = $(".modal-victorian-2");
var $modalVictorian4 = $(".modal-victorian-4");
var $modalVictorian = $(".modal-victorian");
var $modalWhite = $(".modal-white");
var $modalVictorian3 = $(".modal-victorian-3");
var $modalRoom3 = $(".modal-room3");

/* Images collected in variables */

var $homeIcon = $(".home-icon");
var $html = $("html");
var $homec = $(".home");
var $newHome = $("#new-homec");
var $room = $("#roomc");
var $stairs = $("#stairsc");
var $victorian2 = $("#victorian-2c");
var $victorian4 = $("#victorian-4c");
var $victorian = $("#victorianc");
var $white = $("#whitec");
var $victorian3 = $("#victorian-3c");
var $room3 = $("#room3c");

/* Add Clicked Class */

$homec.on("click", function(e) {
  $modalHome.addClass("clicked");
  $html.addClass("clicked");
});

$newHome.on("click", function(e) {
  $modalNewHome.addClass("clicked");
  $html.addClass("clicked");
});

$room.on("click", function(e) {
  $modalRoom.addClass("clicked");
  $html.addClass("clicked");
});

$stairs.on("click", function(e) {
  $modalStairs.addClass("clicked");
  $html.addClass("clicked");
});

$victorian2.on("click", function(e) {
  $modalVictorian2.addClass("clicked");
  $html.addClass("clicked");
});

$victorian4.on("click", function(e) {
  $modalVictorian4.addClass("clicked");
  $html.addClass("clicked");
});

$victorian.on("click", function(e) {
  $modalVictorian.addClass("clicked");
  $html.addClass("clicked");
});

$white.on("click", function(e) {
  $modalWhite.addClass("clicked");
  $html.addClass("clicked");
});

$victorian3.on("click", function(e) {
  $modalVictorian3.addClass("clicked");
  $html.addClass("clicked");
});

$room3.on("click", function(e) {
  $modalRoom3.addClass("clicked");
  $html.addClass("clicked");
});

/* Remove Clicked Class */

$homeIcon.on("click", function(e) {
  $modalHome.removeClass("clicked");
  $modalNewHome.removeClass("clicked");
  $modalRoom.removeClass("clicked");
  $modalStairs.removeClass("clicked");
  $modalVictorian2.removeClass("clicked");
  $modalVictorian4.removeClass("clicked");
  $modalVictorian.removeClass("clicked");
  $modalWhite.removeClass("clicked");
  $modalVictorian3.removeClass("clicked");
  $modalRoom3.removeClass("clicked");
  $html.removeClass("clicked");
});
