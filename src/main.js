import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { getPicturesByQuery } from './js/pixabay-api';
import cardsMarkup from './js/render-functions';

const searchInput = document.querySelector('.input-js');
const searchForm = document.querySelector('#searchForm');
export const cardsArea = document.querySelector('.markup-js');
const loader = document.querySelector('.loader');
const content = document.querySelector('.content');
const loadMoreBtn = document.querySelector('.next-page');

let lightbox;

function initializeLightbox() {
  lightbox = new SimpleLightbox('.markup-js a', {
    captionsData: 'alt',
    captionDelay: 250,
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initializeLightbox();
});

searchForm.addEventListener('submit', handlerSubmit);

const parameters = {
  API_KEY: '44976871-26e069ad13948ce040aac9258',
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: true,
  q: '',
  page: 1,
  limit: 15,
  maxPage: 0,
  totalHits: 0,
};

async function handlerSubmit(event) {
  event.preventDefault();
  parameters.page = 1;
  parameters.q = searchInput.value.trim();
  if (!parameters.q) {
    alert('Please enter a search term');
    return;
  }

  loader.classList.remove('hidden');
  content.classList.add('hidden');

  try {
    const { data, total } = await getPicturesByQuery(parameters);
    parameters.totalHits = total;
    parameters.maxPage = Math.ceil(total / parameters.limit);

    if (data.length === 0) {
      iziToast.error({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
      });
    } else {
      cardsArea.innerHTML = '';
      cardsMarkup(data);
      searchForm.reset();

      lightbox.refresh();
      loadMoreBtn.classList.remove('hidden');

      scrollAfterRender();
    }
  } catch (err) {
    console.error('Fetch Error: ', err);
  } finally {
    loader.classList.add('hidden');
    content.classList.remove('hidden');

    if (parameters.maxPage === 1) {
      loadMoreBtn.removeEventListener('click', handleLoadMore);
      loadMoreBtn.classList.add('hidden');
    }
  }
}

loadMoreBtn.addEventListener('click', handleLoadMore);

async function handleLoadMore() {
  parameters.page += 1;
  loader.classList.remove('hidden');
  loadMoreBtn.classList.add('hidden');

  try {
    const { data } = await getPicturesByQuery(parameters);
    cardsMarkup(data);

    lightbox.refresh();

    scrollAfterRender();

    if (parameters.page * parameters.limit >= parameters.totalHits) {
      loadMoreBtn.classList.add('hidden');
      iziToast.info({
        message: "We're sorry, but you've reached the end of search results.",
      });
      loadMoreBtn.removeEventListener('click', handleLoadMore);
    } else {
      loadMoreBtn.classList.remove('hidden');
    }
  } catch (err) {
    console.error('Fetch Error: ', err);
  } finally {
    loader.classList.add('hidden');
    content.classList.remove('hidden');
  }
}

function scrollAfterRender() {
  requestAnimationFrame(() => {
    const firstCard = cardsArea.querySelector('.gallery-item');
    if (firstCard) {
      const cardHeight = firstCard.getBoundingClientRect().height;

      window.scrollBy({
        top: 2 * cardHeight,
        behavior: 'smooth',
      });
    }
  });
}
