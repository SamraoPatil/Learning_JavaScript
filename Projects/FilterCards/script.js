const categories = ["All", "Men", "Women", "Kids"];
const content = [
  {
    id: "Men",
    label: "Mens Tshirt-1",
  },
  {
    id: "Men",
    label: "Mens Tshirt-2",
  },
  {
    id: "Men",
    label: "Mens Tshirt-3",
  },
  {
    id: "Men",
    label: "Mens Tshirt-4",
  },
  {
    id: "Men",
    label: "Mens Tshirt-5",
  },
  {
    id: "Women",
    label: "Women Tshirt-1",
  },
  {
    id: "Women",
    label: "Women Tshirt-2",
  },
  {
    id: "Women",
    label: "Women Tshirt-3",
  },
  {
    id: "Women",
    label: "Women Tshirt-4",
  },
  {
    id: "Women",
    label: "Women Tshirt-5",
  },
  {
    id: "Kids",
    label: "Kids Tshirt-1",
  },
  {
    id: "Kids",
    label: "Kids Tshirt-2",
  },
  {
    id: "Kids",
    label: "Kids Tshirt-3",
  },
  {
    id: "Kids",
    label: "Kids Tshirt-4",
  },
  {
    id: "Kids",
    label: "Kids Tshirt-5",
  },
];

const filterButtons = document.querySelector(".filter-buttons-wrapper");
const contentWrapper = document.querySelector(".content-wrapper");

function setCategories() {
  categories.forEach((category) => {
    const btnEle = document.createElement("button");
    btnEle.innerText = category;
    btnEle.classList.add("filter-button");
    btnEle.setAttribute("data-filter", category);

    filterButtons.appendChild(btnEle);
  });
}

function setContent() {
  content.forEach((item) => {
    const singleContentItem = document.createElement("div");
    singleContentItem.classList.add("card", item.id);
    singleContentItem.textContent = item.label;

    contentWrapper.appendChild(singleContentItem);
  });
}

setCategories();
setContent();

// main logic start:
const allFilterButtons = document.querySelectorAll(".filter-button");
const allCards = document.querySelectorAll(".card");

function filterCardsByCategory(currentCategory, allCards) {
  allCards.forEach((item) => {
    const isShowAll = currentCategory.toLowerCase() === "all";

    const isFiltered = !item.classList.contains(currentCategory);

    if (isFiltered && !isShowAll) {
      item.classList.add("hide");
    } else {
      item.classList.remove("hide");
    }
  });
}

allFilterButtons.forEach((singleButton) => {
  singleButton.addEventListener("click", () => {
    const currentCategory = singleButton.dataset.filter;

    filterCardsByCategory(currentCategory, allCards);
  });
});
