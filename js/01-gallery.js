import { galleryItems } from './gallery-items.js';
// Change code below this line

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

function createModal(data) {
  const instance = basicLightbox.create(
    `
   <img src="${data.target.dataset.source}" width="800" height="600">
  `
  );
  instance.show();
  document.addEventListener('keydown', onClickEsc);

  function onClickEsc(e) {
    if (e.code === 'Escape') {
      instance.close();
      document.removeEventListener('keydown', onClickEsc);
    }
  }
}
