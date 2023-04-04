
const gal = document.querySelector('.gallery')

export default function renderUser(user) {
    const {
        picture: {large, medium},
        name: {first, last}, 
        phone , 
        email
    } = user

    const markup = `
    <div>
      <a class="user_img" href="${large}">
        <img src="${medium}" alt="user ${last}">
      </a>
      <p>${last} ${first}</p>
      <p><a href="tel:${phone}">${phone}</a></p>
      <p><a href="mailto:${email}">${email}</a></p>
    </div>
    `

  return  gal.insertAdjacentHTML('beforeend', markup)
}