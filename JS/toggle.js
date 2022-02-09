const sidebar = document.querySelector(".sidebar")
document.querySelector(".menu-icon").addEventListener("click", ()=>{
    if (sidebar.style.display === "none") {
        sidebar.style.display = "block";
      } else {
        sidebar.style.display = "none";
      }
})
