const currentPage = 2;
let favArr = new Array

// Navbar Loader Module
import getNavBar from "./modules/navBar.js";
getNavBar(currentPage)

// Footer Loader Module
import getFooter from "./modules/loadFooter.js";
getFooter()

// Movie Search Module
import getMovieByName from "./modules/moviesNameList.js";

export let clickedBtn = 1;

$("#searchByName").submit(function (e) { 
    e.preventDefault();
    const movieName = $("#searchMovieInput").val()
    getMovieByName(movieName, favArr, clickedBtn)
});