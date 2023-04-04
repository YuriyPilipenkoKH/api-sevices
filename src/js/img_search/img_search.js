import { Notify } from "notiflix";
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
    sub: document.querySelector('.search-btn'),
    more: document.querySelector('.load-more'),
    gal : document.querySelector('.gallery'),
    toTop : document.querySelector('.back-to-top'),
}

refs.form.addEventListener('click', onSearch)
refs.more.addEventListener('click', onLoadMore)

function onSearch() {

}

function onLoadMore() {

}

