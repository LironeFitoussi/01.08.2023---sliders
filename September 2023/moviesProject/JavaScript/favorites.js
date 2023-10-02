let favArr = new Array

// Navbar Loader Module
import getNavBar from "./modules/navBar.js";
getNavBar()

// loadFav Loader Module
import loadFav from "./modules/loadFav.js";

if (localStorage.userFavMovies) {
    console.log(favArr);
    favArr = JSON.parse(localStorage.userFavMovies)
    loadFav(favArr)
}




