const sidebar = document.querySelector(".sidebar")
document.querySelector(".menu-icon").addEventListener("click", ()=>{
    if (sidebar.style.display === "none") {
        sidebar.style.display = "block";
      } else {
        sidebar.style.display = "none";
      }
})
const floatingActionBtn = document.querySelector(".floating-button");
document.querySelector(".show-floating-btn").addEventListener("click", ()=>{
  if (floatingActionBtn.style.display === "none") {
    floatingActionBtn.style.display = "block";
  } else {
    floatingActionBtn.style.display = "none";
  }
})
