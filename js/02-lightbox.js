import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

const makeGalleryElMarkup = ({ preview, original, description }) => {
  return `
    <a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>`;
};

const makeGallery = galleryItems.map(makeGalleryElMarkup).join("");

gallery.insertAdjacentHTML("beforeend", makeGallery);

var lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});

console.log(galleryItems);
