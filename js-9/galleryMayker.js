'use strict';
import galleryItemsData from './gallery-items.js';

const galleryList = document.querySelector('.gallery');

function buildGalleryItem(items, parentTag) {
  items.map(item => {
    const singleItem = `<li class="gallery__item">
  <a
    class="gallery__link"
    href="${item.original}"
  >
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />

    <span class="gallery__icon">
      <i class="material-icons">zoom_out_map</i>
    </span>
  </a>
</li>`;

    parentTag.insertAdjacentHTML('afterbegin', singleItem);
  });
}

buildGalleryItem(galleryItemsData, galleryList);

const lightbox = document.querySelector('.js-lightbox');
const lightboxContent = document.querySelector('.js-lightbox__content');
const lightboxImage = document.querySelector('.js-lightbox___image');
const closeLigtbox = document.querySelector('.js-lightbox__button');

galleryList.addEventListener('click', handelOpenModal);
closeLigtbox.addEventListener('click', handelCloseModalButton);
lightboxContent.addEventListener('click', handelCloseModal);

function handelOpenModal(e) {
  e.preventDefault();
  lightboxImage.setAttribute('src', e.target.dataset.source);
  lightbox.classList.add('is-open');
  window.addEventListener('keydown', handelKeyPress);
}

function handelCloseModal(e) {
  if (e.target !== e.currentTarget) {
    return;
  }
  lightbox.classList.remove('is-open');
  lightboxImage.removeAttribute('src');
}

function handelCloseModalButton() {
  lightbox.classList.remove('is-open');
  window.removeEventListener('keydown', handelKeyPress);
  lightboxImage.removeAttribute('src');
}

function handelKeyPress(e) {
  if (e.code !== 'Escape') {
    return;
  }
  handelCloseModalButton();
}
