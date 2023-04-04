import usersRequest from "./request";
import renderUser from './renderUser'
import {headerOfUserApi} from '../mainMarkup'
import { Notify } from "notiflix";
import simpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css"
// import { doc } from "prettier";
import '../../css/user_api.css'
import '../toIndex'

const lightbox = new SimpleLightbox('.gallery .user_img', {
  captionsData: 'alt',
  captionDelay: 250,
 
});

document.querySelector('#root').innerHTML = headerOfUserApi

const refs = {
    head: document.querySelector('.head'),
    form: document.querySelector('#search-form'),
    sub: document.querySelector('.search-btn'),
    del: document.querySelector('.delete-btn'),
}

console.log(refs.form);


refs.form.addEventListener('submit', submitHandler)

 function submitHandler(e) {
  e.preventDefault()

  usersRequest()

  .then(user => {

    renderUser(user)
      lightbox.refresh();
})

  .catch(error => {
   
    Notify.failure(error.message)
})}



