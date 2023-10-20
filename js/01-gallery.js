import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

const makeGalleryElMarkup = ({ preview, original, description }) => {
  return `<div class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </div>`;
};

const makeGallery = galleryItems.map(makeGalleryElMarkup).join("");

gallery.insertAdjacentHTML("beforeend", makeGallery);

gallery.addEventListener("click", onImageClick);

function onImageClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }

  const img = event.target;
  const imgUrl = img.getAttribute("data-source");

  const instance = basicLightbox.create(
    `<img src="${imgUrl}" width="800" height="600">`,
    {
      onShow: () => document.addEventListener("keydown", onClose),
      onClose: () => document.removeEventListener("keydown", onClose),
    }
  );

  instance.show();

  function onClose(event) {
    if (event.code === "Escape") {
      instance.close();
    }
  }
}

console.log(galleryItems);
