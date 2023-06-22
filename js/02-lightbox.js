import { galleryItems } from './gallery-items.js';

const refs = { galleryEl: document.querySelector('.gallery') };

refs.galleryEl.insertAdjacentHTML('beforeend', createMarkup(galleryItems));

function createMarkup(imgs) {
  return imgs
    .map(({ preview, original, description } = {}) => {
      return `  <li class="gallery__item">
        <a href="${original}" class="gallery__link">
          <img data-source="${original}" class="gallery__image" src="${preview}" alt="${description}" />
        </a>
    </li>`;
    })
    .join('');
}

refs.galleryEl.addEventListener('click', onClick);

function onClick(e) {
  e.preventDefault();

  if (e.target.classList.contains('gallery__image')) {
    createModal(e);
  }
}
