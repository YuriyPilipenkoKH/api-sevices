import usersRequest from "./request";
import renderUser from './renderUser'
import {headerOfUserApi} from '../mainMarkup'
import { Notify } from "notiflix";
import simpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css"
// import { doc } from "prettier";
import '../../css/user_api.css'
import '../toIndex'
import { onToTop, onScroll } from "../scroll";
import { toggleRadio } from "./toggleRadio";

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
    radio : document.querySelector('.radio'),
    box : document.querySelector('[type="checkbox"]'),

}

console.log(refs.box.checked);
// refs.del.disabled = true;
refs.toTop.addEventListener('click', onToTop);
refs.radio.addEventListener('click', toggleRadio);
onScroll()


refs.form.addEventListener('submit', submitHandler)
refs.del.addEventListener('click', deleteUser)

const usersStorage = []
const storageKey = 'users'
const usersData = localStorage.getItem(storageKey)

if(usersData) {
  const parse = JSON.parse(usersData) 
  parse.map(user => renderUser(user))
}

 function submitHandler(e) {
  e.preventDefault()
  usersRequest()

  .then(user => {

    renderUser(user)
    refs.del.disabled = false;
      lightbox.refresh();

      usersStorage.push(user)
      localStorage.setItem(storageKey, JSON.stringify(usersStorage))
})

  .catch(error => {
   
    Notify.failure(error.message)
})}

function deleteUser() {
  console.log('innerHTML = ');
  refs.gal.innerHTML = ''
  localStorage.removeItem(storageKey)
}





