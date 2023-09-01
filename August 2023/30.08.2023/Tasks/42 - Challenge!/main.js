function createMovieList() {
    var moviesArr = [];
    var count = +prompt("How many movies do you want to add?");
    
    for (let i = 0; i < count; i++) {
        moviesArr.push({
            title: prompt(`Enter the title of movie ${i + 1}:`),
            views: +prompt(`Enter the number of views for the movie:`),
            releaseYear: +prompt(`Enter the release year for the movie:`),
            imageUrl: prompt(`Enter the image URL for the movie:`)
        });
    }

    var moviesListDiv = document.getElementById("moviesList");

    for (let i = 0; i < moviesArr.length; i++) {
        var movie = moviesArr[i];
        moviesListDiv.innerHTML += `
            <div class="movie">
                <h2>${movie.title}</h2>
                <p>Views: ${movie.views}</p>
                <p>Release Year: ${movie.releaseYear}</p>
                <img src="${movie.imageUrl}" alt="${movie.title} Image">
            </div>
        `;
    }
}

createMovieList();
