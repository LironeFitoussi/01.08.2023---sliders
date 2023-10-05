const currentPage = 4
// Apple Mobile Support
import addAppleSupport from "./modules/appleMobile.js";
addAppleSupport()

// Navbar Loader Module
import getNavBar from "./modules/navBar.js";
getNavBar(currentPage)

// Footer Loader Module
import getFooter from "./modules/loadFooter.js";
getFooter()

//! Whatsapp Form Submit
$("#WAForm").submit(function (e) { 
    e.preventDefault();
    let userMSG = $("#message").val()
    window.open(`https://api.whatsapp.com/send?phone=972585109829&text=${userMSG}`, '_blank');
});
