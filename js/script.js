document.addEventListener("DOMContentLoaded", () => {

  document.addEventListener("keyup", e => {
    if (e.target.matches("#buscador")) {
      
      if (e.key === "Escape") e.target.value = "";

      const searchValue = e.target.value.toLowerCase();

      if (searchValue === "super secret") {
        document.querySelectorAll(".conte").forEach(conte => {
          conte.classList.add("filtro");
        });
        document.querySelector(".conteSecret").classList.remove("filtro");
      } else {
        document.querySelectorAll(".conte").forEach(conte => {
          if (conte.textContent.toLowerCase().includes(searchValue)) {
            conte.classList.remove("filtro");
          } else {
            conte.classList.add("filtro");
          }
        });
        document.querySelector(".conteSecret").classList.add("filtro");
      }
    }
  });
});