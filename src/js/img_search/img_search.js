import { Notify } from "notiflix";
import Notiflix from 'notiflix';
import simpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css"
import { headerOfClassSearch } from '../mainMarkup'
import { fetchCard } from "./img_fetch";
import { renderGallery } from "./img_render";
import { onScroll } from "../scroll";
import '../../css/img_search.css'
import '../toIndex'
import '../../index'

const lightbox = new SimpleLightbox('.gallery .gallery__link', {
    captionsData: 'alt',
    captionDelay: 250,
   
  });

document.querySelector('#root').innerHTML = headerOfClassSearch

 const refs = {
    head: document.querySelector('.header'),
    form: document.querySelector('#search-form'),
    input: document.querySelector('.field'),
    sub: document.querySelector('.search-btn'),
    loadMore: document.querySelector('.load-more'),
    gal : document.querySelector('.gallery'),
    toTop : document.querySelector('.back-to-top'),
}

// refs.loadMore.classList.add('is-hidden')
refs.toTop.classList.add('is-hidden')

refs.form.addEventListener('submit', onSearch)
refs.loadMore.addEventListener('click', onLoadMore)
refs.input.addEventListener('input', onInputChange)

let query = refs.input.value
const page = 1 
const perPage = 40

// onscroll()

function onSearch(e) {
    e.preventDefault()
    query = refs.input.value.trim()
    refs.sub.disabled = true
    refs.gal.innerHTML = '';


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

        renderGallery(data.hits);
        lightbox.refresh();


        Notiflix.Notify.success(`Hooray! We found ${totalHits} images.`);
        refs.sub.disabled = true;
        refs.loadMore.classList.add('visible')
    })
}

function onLoadMore(e) {
    e.preventDefault()
}

function onInputChange() {
    refs.sub.disabled = false
}

