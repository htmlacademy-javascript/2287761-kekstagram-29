import {createGallery} from './data.js';

const photosContainer = document.querySelector('.pictures');
const photoTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');

const gallery = createGallery();

gallery.forEach((photo) => {
  const photoElement = photoTemplate.cloneNode(true);
  photoElement.querySelector('.picture__img').src = photo.url;
  photoElement.querySelector('.picture__img').alt = photo.description;
  photoElement.querySelector('.picture__likes').textContent = photo.likes;
  photosContainer.append(photoElement);
});
