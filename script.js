const covers = document.querySelector("#magazine-covers");
const coverButtons = document.querySelectorAll(".magazine-cover");
const catalog = document.querySelector("#catalog");
const catalogTitle = document.querySelector(".catalog-title");
const backButton = document.querySelector(".catalog-back");
const models = document.querySelectorAll(".model-card");
let selectedCover;

coverButtons.forEach((cover) => {
  cover.addEventListener("click", () => {
    selectedCover = cover;
    const category = cover.dataset.category;
    models.forEach((model) => {
      model.hidden = model.dataset.category !== category;
    });
    catalogTitle.textContent = category === "mujeres" ? "Talento femenino" : "Talento masculino";
    covers.hidden = true;
    catalog.hidden = false;
    catalogTitle.focus();
  });
});

backButton.addEventListener("click", () => {
  catalog.hidden = true;
  covers.hidden = false;
  selectedCover.focus();
});

document.querySelector("#year").textContent = new Date().getFullYear();
