const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzODBjNWU5ZDM0YTU2M2I5NTMxYTRlYjllNDU1ODMyYyIsInN1YiI6IjY2MmIzOTk4ZjkxODNhMDExYzMwZmI2ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QWhcRuNHIniKPBKvi072GEb21l7F25suoW5xmvUB5vg",
  },
};
let moviedata;
fetch(
  "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
  options
)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));
  
// const movielist = document.querySelector('.movie')
response.forEach(a => {
  
});