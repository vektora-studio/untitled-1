const mobileBtn = document.querySelector(".mobile-btn");
const navMenu = document.querySelector("#mobile-menu");
const link = document.querySelectorAll(".link");
console.log(link)

mobileBtn.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});

link.forEach(n => (
    n.addEventListener("click", closeMenu))
)

function closeMenu() {
    navMenu.classList.remove('active')
}

// const navLink = document.querySelectorAll(".nav-link");
// const btnNavbar = document.querySelector('.btn-navbar')

// navLink.forEach(n => n.addEventListener("click", closeMenu));
// btnNavbar.addEventListener('click', closeMenu)

// function closeMenu() {
//     hamburger.classList.remove("active");
//     navMenu.classList.remove("active");
// }