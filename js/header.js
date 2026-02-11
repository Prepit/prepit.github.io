document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.querySelector(".menu-btn");
  const searchBtn = document.querySelector(".search-btn");
  const sideMenu = document.querySelector(".side-menu");
  const searchBox = document.querySelector(".search-box");

  // メニュー開閉
  menuBtn.addEventListener("click", () => {
    sideMenu.classList.toggle("open");
  });

  // 検索表示
  searchBtn.addEventListener("click", () => {
    searchBox.style.display =
      searchBox.style.display === "block" ? "none" : "block";
  });
});
