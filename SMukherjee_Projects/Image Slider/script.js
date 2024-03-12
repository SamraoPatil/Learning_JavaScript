const slider = document.querySelector(".slider");
const dotsContainer = document.querySelector(".dots-container");

async function fetchListOfImages() {
  try {
    const response = await fetch(
      "https://picsum.photos/v2/list?page=1&limit=10"
    );

    const imagesList = await response.json();

    if (imagesList && imagesList.length > 0) displayImages(imagesList);
  } catch (error) {
    console.log(error);
  }
}

function displayImages(getImagesList) {
  slider.innerHTML = getImagesList
    .map(
      (items) =>
        `
    <div class="slide">
    <img src=${items.download_url} alt=${items.id}>
    </div>
        `
    )
    .join(" ");

  dotsContainer.innerHTML = getImagesList
    .map(
      (items, index) =>
        `
        <span class="dot ${
          index === 0 ? "active" : ""
        }" data-slide=${index}></span>
    `
    )
    .join(" ");
}

fetchListOfImages();

// slider functionality :

setTimeout(() => {
  const slides = document.querySelectorAll(".slide");
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");

  let currentSlide = 0;

  function activeDot(slide) {
    document
      .querySelectorAll(".dot")
      .forEach((dotItem) => dotItem.classList.remove("active"));

    document
      .querySelector(`.dot[data-slide="${slide}"]`)
      .classList.add("active");
  }

  function changeCurrentSlide(currenSlide) {
    slides.forEach(
      (change = (slideItem, index) =>
        (slideItem.style.transform = `translateX(${
          100 * (index - currenSlide)
        }%)`))
    );

    changeCurrentSlide(currenSlide);
  }

  prevBtn.addEventListener("click", () => {
    currentSlide--;
    if (0 > currentSlide) {
      currentSlide = slides.length - 1;
    }
    changeCurrentSlide(currentSlide);
    activeDot(currentSlide);
  });

  nextBtn.addEventListener("click", () => {
    currentSlide++;

    if (currentSlide > slides.length - 1) {
      currentSlide = 0;
    }

    changeCurrentSlide(currentSlide);
    activeDot(currentSlide);
  });

  dotsContainer.addEventListener("click", (event) => {});
}, 1000);

// function handleImageSlider() {
//   function activeDot(slide) {
//     document
//       .querySelectorAll(".dot")
//       .forEach((dotItem) => dotItem.classList.remove("active"));

//     document
//       .querySelector(`.dot[data-slide="${slide}"]`)
//       .classList.add("active");
//   }

//   function changeCurrentSlide(slides) {}

//   prevBtn.addEventListener("click", () => {
//     currentSlide--;
//     if (0 >= currentSlide) {
//       currentSlide = 0;
//     }
//     changeCurrentSlide(currentSlide);
//     activeDot(currentSlide);
//   });

//   nextBtn.addEventListener("click", () => {
//     currentSlide++;

//     if (currentSlide > slides.length - 1) {
//       currentSlide = 0;
//     }

//     changeCurrentSlide(currentSlide);
//     activeDot(currentSlide);
//   });

//   dotsContainer.addEventListener("click", () => {});
// }

// handleImageSlider();
