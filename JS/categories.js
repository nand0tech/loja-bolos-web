export function initionCategories() {
  const buttons = document.querySelectorAll(".btnCategories");
  const cards = document.querySelectorAll(".card");
  const title = document.querySelector("#categoryTitle");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const category = button.dataset.category;

      buttons.forEach((btn) => btn.classList.remove("active"));

      button.classList.add("active");
    
      if (category === "all") {
        title.textContent = "Todos os Bolos:";
      } else if (category === "chocolate") {
        title.textContent = "Bolos de Chocolate:";
      } else if (category === "morango") {
        title.textContent = "Bolos de Morango:";
      } else {
        title.textContent = "Categoria";
      }
      // filtro dos cards
      cards.forEach((card) => {
        if (category === "all" || card.dataset.category === category) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    });
  });
  const btnAll = document.querySelector('[data-category="all"]');
  if (btnAll) btnAll.click();
}
