import { cardsArea } from '../main';

export default function cardsMarkup(card) {
  const markup = card
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `
   <li class="gallery-item">
  <a class="gallery-link" href="${largeImageURL}">
    <img
      class="gallery-image"
      src="${webformatURL}"
      alt="${tags}"
      width="360px"
      height="200px"
      
    />
    <div class="text-container">
     <p class="text-content">Likes <span class="data-server" >${likes}</span></p>
    <p class="text-content">Views <span class="data-server" >${views}</span></p>
    <p class="text-content">Comments <span class="data-server" > ${comments}</span></p>
    <p class="text-content">Downloads <span class="data-server" >${downloads} </span></p>
    </div>
   
  </a>
</li>
`
    )
    .join('');
  cardsArea.insertAdjacentHTML('beforeend', markup);
}
