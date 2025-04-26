const nav = document.querySelector("#main-nav");
const btn = document.querySelector("#nav-btn");
const img = document.querySelector("#nav-img");

window.addEventListener("scroll", () => {
  if (!nav || !btn || !img) return;

  const scrolleable = window.scrollY > 115;

  // Toggle fixed or absolute position based on vertical scroll position
  nav.classList.toggle("fixed", scrolleable);
  nav.classList.toggle("top-0", scrolleable);
  nav.classList.toggle("text-black", scrolleable);
  nav.classList.toggle("bg-white", scrolleable);
  nav.classList.toggle("py-0", scrolleable);
  btn.classList.toggle("text-white", scrolleable);

  scrolleable
    ? img.setAttribute("src", "/Logo-MAZ-Azul.png")
    : img.setAttribute("src", "/Logo-MAZ-Blanco.png");
  nav.classList.toggle("absolute", !scrolleable);
  nav.classList.toggle("text-white", !scrolleable);
});
