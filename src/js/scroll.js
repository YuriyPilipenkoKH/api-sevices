

export { onScroll, onToTop, onToDown, toggleRadio };


window.addEventListener('scroll', onScroll);

function onScroll() {
  const toTop = document.querySelector('.back-to-top')
  const scrolled = window.pageYOffset;
  const coords = document.documentElement.clientHeight;

  if (scrolled > coords) {
    toTop.classList.add('visible');
  }
  if (scrolled < coords) {
    toTop.classList.remove('visible');
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
