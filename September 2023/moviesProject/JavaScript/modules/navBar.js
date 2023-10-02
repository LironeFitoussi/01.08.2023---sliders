export default function getNavBar(currentPage) {
  console.log("Nav Loaded");
  const navContent = $("<nav>");
  navContent.html(
    `
        <nav class="navbar navbar-expand-lg navbar-dark p-3 bg-danger" id="headerNav">
            <div class="container-fluid">
                <a class="navbar-brand d-block d-lg-none" href="#">
                    <img src="../Assets/favicon.ico" height="80" />
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav mx-auto">

                        <li class="nav-item">
                            <a class="pageFinder nav-link mx-2 " aria-current="page" href="./index.html">Home</a>
                        </li>

                        <li class="nav-item dropdown">
                            <a class="pageFinder nav-link mx-2 dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                Search Movie
                            </a>
                            <ul id="sbw" style="display: none;">
                                <li><a class="dropdown-item" href="./singleById.html">By ID</a></li>
                                <li><a class="dropdown-item" href="#">By Name</a></li>
                            </ul>
                        </li>

                        <li class="nav-item d-none d-lg-block">
                            <a class="nav-link mx-2" href="#">
                                <img src="../Assets/favicon.ico" height="80" />
                            </a>
                        </li>

                        <li class="nav-item">
                            <a class="pageFinder nav-link mx-2" href="./about.html">About</a>
                        </li>

                        <li class="nav-item">
                            <a class="pageFinder nav-link mx-2" href="./favorites.html">Favorites</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
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
      $(index).addClass("active");
    }
  });
}
