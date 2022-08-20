const trendingMovies = document.querySelector(".trendingPreview-movieList");
const genreMovies = document.querySelector(".categoriesPreview-list");
const baseUrlImg = 'https://image.tmdb.org/t/p/';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  Headers:{
    'Content-type': 'application/json;charset=utf-8',
  },
  params: {
    'api_key': API_key,
  },
});

async function getTrendingMoviesPreview() {
    const { data } = await api(`trending/movie/day`);
    const movies = data.results;
    
    movies.forEach(movie => {
        let view = `
        <div class="movie-container">
        <img
          src="${baseUrlImg}w300/${movie.poster_path}"
          class="movie-img"
          alt="${movie.title}"
        />
        </div>
        `;
        trendingMovies.innerHTML += view;
    });
    // console.log(data);
}

async function getCategoriesPreview() {
    const { data} = await api(`genre/movie/list`);
    const genres = data.genres;
    
    genres.forEach(movie => {
        let view = `
        <div class="category-container">
        <h3 id="id${movie.id}" class="category-title">${movie.name}</h3>
        </div>
        `;
        genreMovies.innerHTML += view;
    });
    // console.log(genres);
}

getTrendingMoviesPreview();
getCategoriesPreview();