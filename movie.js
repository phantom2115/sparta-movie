const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzODBjNWU5ZDM0YTU2M2I5NTMxYTRlYjllNDU1ODMyYyIsInN1YiI6IjY2MmIzOTk4ZjkxODNhMDExYzMwZmI2ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QWhcRuNHIniKPBKvi072GEb21l7F25suoW5xmvUB5vg",
  },
};

fetch(
  "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
  options
)
  .then((response) => response.json())
  .then((response) => {    
    const array = response.results //response.result 객체 array 변수에 넣기
    getout(array)   //array 값 fetch 밖으로 꺼내기
  })
  .catch(err => console.error(err));

  function getout(array){ //꺼낸 array로 카드 생성 함수
    array.forEach(element => {
      let  movie= { //객체 만들기
      poster : element.backdrop_path,
      title : element.title,
      view : element.overview,
      average : element.vote_average,
      id : element.id
    }  
    console.log(movie) //만들어 놓은 객체로 카드 만들기
    let card = `<div id = "card" onclick = "search(${movie.id})" >                             
                 <img id = "poster"src="https://image.tmdb.org/t/p/w200/${movie.poster}" alt="">
                  <div id = "incard">
                    <p id = "title">${movie.title} </p>
                    <p id = "view">${movie.view}</p>
                    <p>⭐️ :  ${movie.average}</p>
                  </div>
                </div>`
            
    const movielist = document.querySelector('.movie') //솔직히 이 두개는 모르겠음
    movielist.innerHTML += card; //솔직히 이 두개는 모르겠음
      
    });
  }

  function search(movieId) { //카드 클릭 시 alert
    alert('Movie ID : ' + movieId); 
  }



  //검색 기능 GPT의 힘
  document.getElementById('text-search').addEventListener('input', function(e) {
    const searchText = e.target.value.toLowerCase();
    const cards = document.querySelectorAll('#card');
  
    cards.forEach(card => {
      const title = card.querySelector('#title').innerText.toLowerCase();
      if(title.includes(searchText)) {
        card.style.display = ''; 
      } else {
        card.style.display = 'none'; 
      }
    });
  });
  
  
  



//검색 기능

  
