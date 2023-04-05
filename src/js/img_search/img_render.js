

export function renderGallery(images,page,perPage) {
    const  gal = document.querySelector('.gallery')//+page*perPage
   
 
    const markup = images
    .map((image, idx) => {

      console.log('page',page, 'perPage',perPage);
      const {
        id,
        largeImageURL,
        webformatURL, 
        tags, 
        likes, 
        views,
        comments, 
        downloads 
        } = image;
        return `
        <a class="gallery__link" href="${largeImageURL}">
          <div class="gallery-item" id="${id}">
            <img class="gallery-item__img" src="${webformatURL}" alt="${tags}" loading="lazy" />
            <div class="info">
              <p class="info-item"><b>ID</b>${(idx+1) + ((page-1)* perPage)}</p>
              <p class="info-item"><b>Views</b>${views}</p>
              <p class="info-item"><b>Comments</b>${comments}</p>
              <p class="info-item"><b>Downloads</b>${downloads}</p>
            </div>
          </div>
         </a>
         `;
     })
     .join('');

    gal.insertAdjacentHTML('beforeend', markup);
}