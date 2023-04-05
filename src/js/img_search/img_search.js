import { Notify } from "notiflix";
import Notiflix from 'notiflix';
import simpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css"
import { headerOfClassSearch } from '../mainMarkup'
import { fetchCard } from "./img_fetch";
import '../../css/img_search.css'
import '../toIndex'

const lightbox = new SimpleLightbox('.gallery .user_img', {
    captionsData: 'alt',
    captionDelay: 250,
   
  });

document.querySelector('#root').innerHTML = headerOfClassSearch

export const refs = {
    head: document.querySelector('.header'),
    form: document.querySelector('#search-form'),
    input: document.querySelector('.field'),
    sub: document.querySelector('.search-btn'),
    loadMore: document.querySelector('.load-more'),
    gal : document.querySelector('.gallery'),
    toTop : document.querySelector('.back-to-top'),
}

refs.form.addEventListener('submit', onSearch)
refs.loadMore.addEventListener('click', onLoadMore)
refs.input.addEventListener('input', onInputChange)

let query = refs.input.value
const page = 1 
const perPage = 40

function onSearch(e) {
    e.preventDefault()
    query = refs.input.value.trim()
    refs.sub.disabled = true
    refs.gal.innerHTML = '';
    refs.loadMore.classList.add('is-hidden');


    if (query === '') {
        Notify.failure('The search string cannot be empty. Please specify your search query.');
        return;
    }
    if ( query.length === 1) {
        Notify.failure('The  query is too short. Please specify your search query.');
        return;
    }

    console.log(refs.input.value);
    fetchCard(query,page,perPage)
    .then(( data) => {
        const {hits, totalHits, total } = data
        console.log('hits', hits, 'totalHits', totalHits, 'total',total) ;

        if (totalHits === 0) {
            Notify.failure(
                'Sorry, there are no images matching your search query. Please try again.',
              )}
    })
}

function onLoadMore(e) {
    e.preventDefault()
}

function onInputChange() {
    refs.sub.disabled = false
}

