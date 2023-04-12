export { rootMobile,twoSmokingButtons }

const rootMobile = document.querySelector('.header__root-mobile')
const rootDesktop = document.querySelector('.header__root-desktop')

console.log('rootMobile');

const twoSmokingButtons = `
<div class="header__wrapper-bottom">
                  <button class="header__btn-watched btn" type="button">
                      WATCHED
                    </button>
                    <button class="header__btn-queue btn" type="button">QUEUE</button>
                </div>`


if (window.matchMedia("(min-width: 768px)").matches) {
  rootMobile.insertAdjacentHTML('beforeend', twoSmokingButtons)
}                
