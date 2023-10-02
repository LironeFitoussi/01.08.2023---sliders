let favArr = new Array
const currentPage = 5
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




