// const productContainer = [...document.querySelectorAll(".product-container")];
// const nextBtn = [...document.querySelectorAll(".next-btn")];
// const preBtn = [...document.querySelectorAll(".pre-btn")];

// productContainer.forEach((item, i) => {
//   let containerDemenstions = item.getBoundingClientRect();
//   let containerWidth = containerDemenstions.width;
//   console.log(containerWidth);
//   nextBtn[i].addEventListener("click", () => {
//     item.scrollLeft += containerWidth;
//   });
//   preBtn[i].addEventListener("click", () => {
//     item.scrollLeft -= containerWidth;
//   });
// })

const loadMoreBtn = document.querySelector(".load-more-btn");
let currentItem = 4;
loadMoreBtn.addEventListener("click", () => {
  let productContainer = [...document.querySelectorAll(" .product-card")];
  for (let i = currentItem; i < productContainer.length; i++) {
    productContainer[i].style.display = "inline-block";
  }
  currentItem += 4;
  if (currentItem >= productContainer.length) {
    loadMoreBtn.style.display = "none";
  }
});
