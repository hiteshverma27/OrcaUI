const sidebar = document.querySelector(".sidebar");
document.querySelector(".menu-icon").addEventListener("click", () => {
  if (sidebar.style.display === "none") {
    sidebar.style.display = "block";
  } else {
    sidebar.style.display = "none";
  }
});
const sidebarHam = document.querySelector("#sidebar-hamburger");
document.querySelector(".menu-icon-hamburger").addEventListener("click", () => {
  if (sidebarHam.style.display === "none") {
    sidebarHam.style.display = "block";
  } else {
    sidebarHam.style.display = "none";
  }
});
const snackbar = document.querySelector("#snackbar");
document.querySelector("#show-snackbar-btn").addEventListener("click", () => {
  if (snackbar.style.display === "none") {
    snackbar.style.display = "block";
  } else {
    snackbar.style.display = "none";
  }
});
const floatingActionBtn = document.querySelector(".floating-button");
document.querySelector(".show-floating-btn").addEventListener("click", () => {
  if (floatingActionBtn.style.display === "none") {
    floatingActionBtn.style.display = "block";
  } else {
    floatingActionBtn.style.display = "none";
  }
});
