let btnlight = document.querySelector("header button")


btnlight.addEventListener("click", ()=>{
    document.querySelector("header").classList.toggle("light")
    document.querySelector("aside").classList.toggle("light")
    document.querySelector("main").classList.toggle("light")
})