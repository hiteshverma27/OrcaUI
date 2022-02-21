const lightMode = document.querySelector("#light-mode");
const darkMode = document.querySelector("#dark-mode");
const mainWrapper = document.querySelector("#main-wrapper");
const anchorTags = document.querySelectorAll("a");
darkMode.style.display="none";


const setLightMode=()=>{
    mainWrapper.classList.remove("dark-mode");
    lightMode.style.display="none";
    darkMode.style.display="block";
    localStorage.setItem("mode", "light");
}

const setDarkMode=()=>{
    mainWrapper.classList.add("dark-mode");
    darkMode.style.display="none";
    lightMode.style.display="block";
    localStorage.setItem("mode", "dark");
}

let testOne = localStorage.getItem("mode")
if(testOne==="dark"){
    setDarkMode()
}else{setLightMode()};
darkMode.addEventListener("click", setDarkMode)
lightMode.addEventListener("click", setLightMode)
