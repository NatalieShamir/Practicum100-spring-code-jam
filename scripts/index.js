const gallery = document.getElementById("gallery-items");
const popup = document.getElementById("popup");
const popupImage = document.getElementById("popup-image");
const ImageIndexes = [1, 2, 3, 4, 5];
const popupImageIndex = null;

ImageIndexes.forEach((i) => {
  const image = document.createElement("img");
  image.src = `./images/gallery/Terry__gallery-${i}.png`;
  image.alt = `Illusration ${i} of Terrence Shlomo Tegegne as presented in the interactive gallery on his landing page`;
  image.classList.add("gallery__image");

  image.addEventListener("click", () => {
    popup.style.transform = `translateY(0)`;
    popupImage.src = `./images/gallery/Terry__gallery-${i}.png`;
    popupImage.alt = `Illusration ${i} of Terrence Shlomo Tegegne as presented in the interactive gallery on his landing page`;
  });

  gallery.appendChild(image);
});

popup.addEventListener("click", () => {
  popup.style.transform = `translateY(-100%)`;
  popup.src = "";
  popup.alt = "";
});
