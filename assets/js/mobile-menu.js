const hamburger = document.querySelector(".hamburguer")
const navMenu = document.querySelector(".nav-menu")

hamburger.addEventListener("click", () => {
    event.stopPropagation()
    hamburger.classList.toggle("active")
    navMenu.classList.toggle("active")
})

document.addEventListener("click", () => {
    if (hamburger.classList.contains("active") || navMenu.classList.contains("active")) {
        hamburger.classList.toggle("active")
        navMenu.classList.toggle("active")
    }
})