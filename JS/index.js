import { iniciarAvaliacoes } from "./reviews.js";
import { initionCategories } from "./categories.js";
const menu = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");
// HEADER
menu.addEventListener("click", () => {
  menu.classList.toggle("active");
  nav.classList.toggle("active");
});

document.addEventListener("click", (e) => {
  // fecha ao clicar fora do menu
  if (!nav.contains(e.target) && !menu.contains(e.target)) {
    nav.classList.remove("active");
    menu.classList.remove("active");
  }
});

window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section");
  const links = document.querySelectorAll(".nav-link");

  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 300;
    const sectionHeight = section.offsetHeight;

    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      current = section.id;
    }
  });

  links.forEach((link) => {
    link.classList.remove("active");

    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

// SEÇÃO
function carregarSecao(url, id, callback) {
  fetch(url)
    .then((res) => res.text())
    .then((data) => {
      const container = document.getElementById(id);

      if (container) {
        container.innerHTML = data;
      }

      if (callback) {
        callback();
      }
    })
    .catch((erro) => console.error("Erro ao carregar:", erro));
}
carregarSecao("./html-pages/reviews.html", "reviews", iniciarAvaliacoes);
carregarSecao("./html-pages/categories.html", "categories", initionCategories);
carregarSecao("./html-pages/contact.html", "contact");
carregarSecao("./html-pages/about.html", "about");
