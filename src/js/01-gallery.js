import simpleLightbox from 'simplelightbox';
import "simplelightbox/dist/simple-lightbox.min.css";

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const gallery = document.querySelector('.gallery')

function markup(arr) {
   return arr.map(({preview, original, description}) =>
    `
    <li class="gallery__item">
    <a class="gallery__link" href="${original}">
       <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>
 </li>
    `
    ).join('')
}

gallery.insertAdjacentHTML('beforeend', markup(galleryItems))

let lightbox = new simpleLightbox('.gallery a', {
    overlayOpacity: 0.8,
    captionSelector: 'img',
    captionsData: 'alt',
    captionDelay: 250
});


