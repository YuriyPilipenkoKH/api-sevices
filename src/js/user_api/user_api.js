import usersRequest from "./request";
import renderUser from './renderUser'
import {headerOfUserApi} from '../mainMarkup'
import { Notify } from "notiflix";
import simpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css"
// import { doc } from "prettier";
import '../../css/user_api.css'
import '../toIndex'
import { onToTop } from "../scroll";

const lightbox = new SimpleLightbox('.gallery .user_img', {
  captionsData: 'alt',
  captionDelay: 250,
 
});

document.querySelector('#root').innerHTML = headerOfUserApi

export const refs = {
    head: document.querySelector('.head'),
    form: document.querySelector('#search-form'),
    sub: document.querySelector('.search-btn'),
    del: document.querySelector('.delete-btn'),
    gal : document.querySelector('.gallery'),
    toTop : document.querySelector('.back-to-top'),
}

refs.del.disabled = true;
refs.toTop.addEventListener('click', onToTop);


refs.form.addEventListener('submit', submitHandler)
refs.del.addEventListener('click', deleteUser)

 function submitHandler(e) {
  e.preventDefault()

  usersRequest()

  .then(user => {

    renderUser(user)
    refs.del.disabled = false;
      lightbox.refresh();
})

  .catch(error => {
   
    Notify.failure(error.message)
})}

function deleteUser() {
  console.log('innerHTML = ');
  refs.gal.innerHTML = ''
}



