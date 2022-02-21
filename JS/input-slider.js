const input = document.querySelector("#input-slider");
const output = document.querySelector("#output-slider")

input.addEventListener("change", ()=>{
    console.log(input.value);
    output.innerText = `You selected ${input.value}`
})