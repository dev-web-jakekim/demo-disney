const requests = {
  fetchNowPalying: "movie/now_playing",
  fetchTrending: "/trending/all/week",
  fetchTopRated: "/movie/top_rated",
  fetchActionMovies: "/discover/movie?with_genres=28",
  fetchComedyMovies: "/discover/movie?with_genres=35",
  fetchHorrorMovies: "/discover/movie?with_genres=27",
  fetchRomanceMovies: "/discover/movie/with_genres=10749",
  fetchDocumentaries: "/discover/movie?with_genres=99",
  fetchMystery: "/discover/movie?with_genres=10770",
  fetchSciFi: "/discover/movie?with_genres=10771",
  fetchThriller: "/discover/movie?with_genres=10772",
  fetchAnimation: "/discover/movie?with_genres=10773",
};

export default requests;
