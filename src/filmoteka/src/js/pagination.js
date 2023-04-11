import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
import '../sass/components/_my-library.scss';
import { refs } from './refs';

let moviesInQueue = JSON.parse(localStorage.getItem('queue')) || [];
let moviesInWatched = JSON.parse(localStorage.getItem('watched')) || [];

const DEFAULT_POSTER_URL =
  'https://motivatevalmorgan.com/wp-content/uploads/2016/06/default-movie.jpg';

const itemsPerPage = 20;
const totalItems = moviesInWatched.length;
const totalPages = Math.ceil(totalItems / itemsPerPage);
const ul = document.querySelector('.gallery-list');

// Create the pagination instance and attach the event listener
const paginationElement = document.getElementById('pagination');

const pagination = new Pagination(paginationElement, {
  totalItems: totalItems,
  itemsPerPage: itemsPerPage,
  visiblePages: 5,
  page: 1,
  centerAlign: true,
  firstItemClassName: 'tui-first-child',
  lastItemClassName: 'tui-last-child',
  template: {
    page: '<a href="#" class="tui-page-btn">{{page}}</a>',
    currentPage:
      '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',

    disabledMoveButton:
      '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
      '<span class="tui-ico-{{type}}">{{type}}</span>' +
      '</span>',
    moreButton:
      '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
      '<span class="tui-ico-ellip">...</span>' +
      '</a>',
  },
  usageStatistics: false,
});

function renderMovieCardsToWatched() {
  pagination.on('afterMove', function (eventData) {
    ul.innerHTML = '';

    const startIdx = (eventData.page - 1) * itemsPerPage;
    const endIdx = startIdx + itemsPerPage;

    const data = moviesInWatched;

    const moviesArray = data.slice(startIdx, endIdx);

    const IMG_URL = 'https://image.tmdb.org/t/p/w500';
    const markup = moviesArray
      .map(({ poster_path, title, genres, id, release_date }) => {
        const date = release_date.split('').splice(0, 4).join('');
        let genresToShow = '';
        const genresCount = genres.length;
        const posterUrl = poster_path
          ? `${IMG_URL}${poster_path}`
          : DEFAULT_POSTER_URL;

        if (genresCount === 1) {
          genresToShow = `${genres[0].name}`;
        } else if (genresCount === 2) {
          genresToShow = `${genres[0].name}, ${genres[1].name}`;
        } else if (genresCount > 2) {
          genresToShow = `${genres[0].name}, ${genres[1].name}, other`;
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
  });

  // Load the first page when the page is loaded
  pagination.movePageTo(1);
}
// Render the markup only when the user clicks on a page link
function renderMovieCardsToQueue() {
  pagination.on('afterMove', function (eventData) {
    ul.innerHTML = '';

    const startIdx = (eventData.page - 1) * itemsPerPage;
    const endIdx = startIdx + itemsPerPage;

    const data = moviesInQueue;

    const moviesArray = data.slice(startIdx, endIdx);

    const IMG_URL = 'https://image.tmdb.org/t/p/w500';
    const markup = moviesArray
      .map(({ poster_path, title, genres, id, release_date }) => {
        const date = release_date.split('').splice(0, 4).join('');
        let genresToShow = '';
        const genresCount = genres.length;
        const posterUrl = poster_path
          ? `${IMG_URL}${poster_path}`
          : DEFAULT_POSTER_URL;

        if (genresCount === 1) {
          genresToShow = `${genres[0].name}`;
        } else if (genresCount === 2) {
          genresToShow = `${genres[0].name}, ${genres[1].name}`;
        } else if (genresCount > 2) {
          genresToShow = `${genres[0].name}, ${genres[1].name}, other`;
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
  });

  // Load the first page when the page is loaded
  pagination.movePageTo(1);
}

export { renderMovieCardsToQueue, renderMovieCardsToWatched };
