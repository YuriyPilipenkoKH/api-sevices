import './addNotifier'
import throttle from 'lodash.throttle'
export { rootMobile,twoSmokingButtons }

const rootMobile = document.querySelector('.header__root-mobile')
const rootDesktop = document.querySelector('.header__root-desktop')

console.log(rootMobile);

const twoSmokingButtons = `
<div class="header__wrapper-bottom">
                  <button class="header__btn-watched btn" type="button">
                      WATCHED
                    </button>
                    <button class="header__btn-queue btn" type="button">QUEUE</button>
                </div>`

           


if (window.matchMedia('(min-width: 768px)').matches) {
  rootDesktop.innerHTML = twoSmokingButtons
  
  console.log('768');
}  
else {
  rootDesktop.innerHTML = ``
  rootMobile.innerHTML = twoSmokingButtons
  console.log('mobile');
}

export function renderTwoButtons () {

}

// visualViewport.addEventListener("resize", throttle( 
//   (e) => {
//     //  console.log(e.currentTarget.width);
//     let viewportWidth = e.currentTarget.width
    
//      if(viewportWidth < 768) {
//       rootDesktop.innerHTML = ''
//       rootMobile.innerHTML = twoSmokingButtons
//       console.log('mobile')
//      } 
//      else {
//       rootDesktop.innerHTML = twoSmokingButtons
//       rootMobile.innerHTML = ''
//       console.log('768');
//      }
//     })
//    ,400) ;//_.throttle(  ,2000)

