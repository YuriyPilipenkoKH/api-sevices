import { refs } from './refs';
const IMG_URL = 'https://image.tmdb.org/t/p/w500';
const DEFAULT_POSTER_URL =
  'https://motivatevalmorgan.com/wp-content/uploads/2016/06/default-movie.jpg';
function returnGenreName(genres, id) {
  try {
    const genreToFind = genres.find(genre => genre.id === id);
    if (genreToFind) {
      return genreToFind.name;
    }
  } catch (error) {
    console.log(error);
  }
}
export function renderMoviesMarkup(response) {
  const moviesArray = response.data.results;
  const genres = JSON.parse(localStorage.getItem('genres'));
  console.log(moviesArray);

  const markup = moviesArray
    .map(({ poster_path, title, genre_ids, id, release_date }) => {
      const genresCount = genre_ids.length;
      const date = release_date.split('').splice(0, 4).join('');
      let genresToShow = '';
      const posterUrl = poster_path
        ? `${IMG_URL}${poster_path}`
        : DEFAULT_POSTER_URL;

      if (genresCount === 1) {
        genresToShow = returnGenreName(genres, genre_ids[0]);
      } else if (genresCount === 2) {
        genresToShow = `${returnGenreName(
          genres,
          genre_ids[0]
        )}, ${returnGenreName(genres, genre_ids[1])}`;
      } else if (genresCount > 2) {
        genresToShow = `${returnGenreName(
          genres,
          genre_ids[0]
        )}, ${returnGenreName(genres, genre_ids[1])}, Other`;
      }

      return `<li class="film-card">
      <a href="modal-film.html" class="film-card__link" >
        <div class="film-card__img">
          <img src="${posterUrl}" alt="${title}" loading="lazy" data-id="${id}"/>
        </div>
        <div class="film-card__info">
          <p class="film-card__title">${title}</p>
          <p class="film-card__description">${genresToShow} | ${date}</p>
        </div>
      </a>
    </li>`;
    })
    .join('');

  refs.galleryList.innerHTML = markup;

}
