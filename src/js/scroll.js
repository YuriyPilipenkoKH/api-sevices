
import { refs } from "./user_api/user_api";
export { onScroll, onToTop, onToDown, toggleRadio };


window.addEventListener('scroll', onScroll);

function onScroll() {
  const scrolled = window.pageYOffset;
  const coords = document.documentElement.clientHeight;

  if (scrolled > coords) {
    refs.toTop.classList.add('visible');
  }
  if (scrolled < coords) {
    refs.toTop.classList.remove('visible');
  }
}

function onToTop() {
  if (window.pageYOffset > 0) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

function toggleRadio(e) {
//  console.log(e.target);
 if(refs.box.checked) {
    refs.box.checked = false
   
 }
    refs.box.checked = true
}
