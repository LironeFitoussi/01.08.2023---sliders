let favArr = new Array
const currentPage = 5

// Apple Mobile Support
import addAppleSupport from "./modules/appleMobile.js";
addAppleSupport()

// Navbar Loader Module
import getNavBar from "./modules/navBar.js";
getNavBar(currentPage)

// loadFav Loader Module
import loadFav from "./modules/loadFav.js";

// Footer Loader Module
import getFooter from "./modules/loadFooter.js";
getFooter()

if (localStorage.userFavMovies) {
    console.log(favArr);
    favArr = JSON.parse(localStorage.userFavMovies)
    loadFav(favArr)
}

$(".navBtn").click(() => {
    $(".nav-list").addClass("nav-list-active");
    $("body").css("overflow", "hidden")
  })
  
  $(".navBtnList").click(() => {
    $(".nav-list").removeClass("nav-list-active");
    $("body").css("overflow", "scroll")
  })


