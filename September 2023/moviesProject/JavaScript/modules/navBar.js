export default function getNavBar(currentPage) {
  console.log("Nav Loaded");
  const navContent = $("<nav>");
  navContent.html(
    `
        <div class="navbar">
            <div class="logo">
                <img src="../Assets/favicon.ico" alt="Logo">
            </div>
            <ul class="nav-list">
                <li class="pageFinder"><a href="./index.html">Home</a></li>
                <li class="pageFinder"><a href="./singleById.html">Search</a></li>
                <li class="pageFinder"><a href="./about.html">About</a></li>
                <li class="pageFinder"><a href="./favorites.html">Favorites</a></li>
            </ul>
        </div>
    `
  );
  $(navContent).insertBefore("header");

  $("#navbarDropdownMenuLink").click(function () {
    console.log("click");
    let dropdown = $("#sbw");
    dropdown.toggle();
  });

  const navLinks = $(".pageFinder");
  navLinks.map((link, index) => {
    if (link+1 === currentPage) {
      $(index).attr("id","active");
      $(index).find("a").attr("id","active");
    }
  });
}
