const currentPage = 3

// Navbar Loader Module
import getNavBar from "./modules/navBar.js";
getNavBar(currentPage)

$("#WAForm").submit(function (e) { 
    e.preventDefault();
    console.log("uloaded");
    userMSG = $("#message").val()
    window.open(`https://api.whatsapp.com/send?phone=972585109829&text=${userMSG}`, '_blank');
});

$("#navbarDropdownMenuLink").click(function () {
    let dropdown = $('#sbw');
    dropdown.toggle()
  });