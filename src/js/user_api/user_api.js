import usersRequest from "./request";
import renderUser from './renderUser'
import { Notify } from "notiflix";
import simpleLightbox from "simplelightbox";
import { doc } from "prettier";
import '../../css/user_api.css'
import '../toIndex'

const refs = {
    form: document.querySelector('.search-form')
}
refs.form.addEventListener('submit', submitHandler)

 function submitHandler(e) {
  e.preventDefault()

  usersRequest()

  .then(user => {
    console.log(user)

    renderUser(user)

})

  .catch(error => {
   
    Notify.failure(error.message)
})}

