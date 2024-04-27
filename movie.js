const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzODBjNWU5ZDM0YTU2M2I5NTMxYTRlYjllNDU1ODMyYyIsInN1YiI6IjY2MmIzOTk4ZjkxODNhMDExYzMwZmI2ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QWhcRuNHIniKPBKvi072GEb21l7F25suoW5xmvUB5vg",
  },
};
// let moviedata;

fetch(
  "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
  options
)
  .then((response) => response.json())
  .then((response) => {    
    
    response.results.forEach(element => {    
     let  movie= {
      poster : element.backdrop_path,
      title : element.title,
      view : element.overview,
      average : element.vote_average,
      id : element.id

    }  
    let card = `<div id = "card" onclick = "search(${movie.id})" > 
                 <img id = "poster"src="https://image.tmdb.org/t/p/w200/${movie.poster}" alt="">
                  <div id = "incard">
                    <p id = "title">${movie.title} </p>
                    <p id = "view">${movie.view}</p>
                    <p>⭐️ :  ${movie.average}</p>
                  </div>
                </div>`
            
    const movielist = document.querySelector('.movie')
    movielist.innerHTML += card;  
    
    
    });
    
  })
  .catch(err => console.error(err));

  function search(movieId) {
    alert('id: ' + movieId); 
  }

  window.onload = function() {
    document.getElementById("text-search").focus();
  };

  
  



//검색 기능

  