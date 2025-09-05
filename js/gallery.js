import { images } from './galleryFiles.js';

const gallery = document.querySelector('.gallery');

function markup(arr) {
  return arr
    .map(
      ({ preview, original, description }) =>
        `
    <li class="gallery_item">
    <a class="gallery_link" href="${original}">
       <img class="gallery_image" src="${preview}" alt="${description}" data-source=${original} width=560 height=300/>
    </a>
 </li>
    `
    )
    .join('');
}

gallery.insertAdjacentHTML('beforeend', markup(images));

gallery.addEventListener('click', event => {
  event.preventDefault();

  const target = event.target;
  if (target.nodeName !== 'IMG') return;

  const largeImageURL = target.dataset.source;

  const instance = basicLightbox.create(`
    <img src="${largeImageURL}" width="800" height="600">
  `);

  instance.show();

  const handleKeydown = e => {
    if (e.code === 'Escape') {
      instance.close();
      document.removeEventListener('keydown', handleKeydown);
    }
  };

  document.addEventListener('keydown', handleKeydown);
});
