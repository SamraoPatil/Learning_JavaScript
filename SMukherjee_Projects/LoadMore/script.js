const productsContainer = document.querySelector(".products-container");

const loadMoreBtn = document.querySelector(".load-more-btn");

let currentCount = 0;

async function fetchListOfProducts(getcurrentCount) {
  try {
    const response = await fetch(
      `https://dummyjson.com/products?limit=10&skip=${
        getcurrentCount === 0 ? 0 : getcurrentCount * 10
      }`,
      {
        method: "GET",
      }
    );

    const result = await response.json();

    console.log(result);

    if (result && result.products) displayProducts(result.products);
  } catch (error) {
    console.log(error);
  }
}

function displayProducts(productsList) {
  productsList.forEach((productItem) => {
    const productItemWrapper = document.createElement("div");
    const productTitle = document.createElement("p");
    const productThumbnail = document.createElement("img");
    const productDescription = document.createElement("p");
    const productPrice = document.createElement("p");

    productTitle.textContent = productItem.title;
    productDescription.textContent = productItem.description;
    productThumbnail.src = productItem.thumbnail;
    productPrice.textContent = productItem.price;

    productItemWrapper.classList.add("product-item-wrapper");
    productThumbnail.classList.add("product-thumbnail");
    productTitle.classList.add("product-title");
    productDescription.classList.add("product-description");
    productPrice.classList.add("product-price");

    productItemWrapper.appendChild(productThumbnail);
    productItemWrapper.appendChild(productTitle);
    productItemWrapper.appendChild(productPrice);
    productItemWrapper.appendChild(productDescription);

    productsContainer.appendChild(productItemWrapper);
  });
}

loadMoreBtn.addEventListener("click", () => {
  fetchListOfProducts((currentCount += 1));
});

fetchListOfProducts(currentCount);
