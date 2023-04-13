const refs = {
    container: document.querySelector('.container'),
}


export const btns = {

    all: document.querySelectorAll('.button'),
    home: document.querySelector('.header__btn-home'),
    library: document.querySelector('.header__btn-library'),
    watched: document.querySelector('.header__btn-watched'),
    queue: document.querySelector('.header__btn-queue'),
}

const btnContainer = `
<span class="btn-container"></span>
`

const all = [...btns.all]
// ID to spans
all.map((el,idx,arr) => {
    const span = el.getElementsByTagName('span')
    // console.log(span);

        el.insertAdjacentHTML('afterbegin', btnContainer)
        span[0].setAttribute('id', `0${idx + 1}`)
    
})// innerText: "Submit"

refs.container.addEventListener('mousedown',handleButtonClick)

function handleButtonClick(ev) {
    // console.log(ev.target.className);
    // console.log(ev.target.id);

    if(ev.target.className !== 'btn-container') {
return
    } 
        const offset = ev.target.getBoundingClientRect()
        // console.log(offset);  
    
        const posX = ev.pageX - offset.left
        const posY = ev.pageY - offset.top
    
        createCircleIcon(posX,posY,ev.target)
}


function   createCircleIcon(posX,posY,target)  {

    const circle = document.createElement('div')
    circle.classList.add('circle')

    circle.style.left = `${posX}px`
    circle.style.top = `${posY}px`
    
    target.appendChild(circle)

    setTimeout(() => {
        deleteCircleIcon(circle)
    },1000)
}

function deleteCircleIcon(circle) {
    circle.remove()
}