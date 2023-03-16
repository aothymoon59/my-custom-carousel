const sliderImages = [
  "images/pic-1.jpg",
  "images/pic-2.jpg",
  "images/pic-3.jpg",
  "images/pic-4.jpg",
  "images/pic-5.jpg",
  "images/pic-6.jpg",
  "images/pic-7.jpg",
  "images/pic-8.jpg",
  "images/pic-9.jpg",
];

let sliderIndex = 0;
const imageElement = document.getElementById("slider-img");
setInterval(() => {
  if (sliderIndex === sliderImages.length) {
    sliderIndex = 0;
  }
  const imageUrl = sliderImages[sliderIndex];
  imageElement.src = imageUrl;
  sliderIndex++;
}, 1000);
