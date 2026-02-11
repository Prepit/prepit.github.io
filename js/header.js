document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.querySelector(".menu-btn");
  const searchBtn = document.querySelector(".search-btn");

  if (menuBtn) {
    menuBtn.addEventListener("click", () => {
      alert("Menu clicked");
    });
  }

  if (searchBtn) {
    searchBtn.addEventListener("click", () => {
      alert("Search clicked");
    });
  }
});
