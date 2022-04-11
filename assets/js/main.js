const mobileBtn = document.querySelector(".mobile-btn");
const navMenu = document.querySelector("#mobile-menu");

mobileBtn.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    console.log('p')
});

// function mobileMenu() {
//     // mobileBtn.classList.toggle("active");
// }

// const navLink = document.querySelectorAll(".nav-link");
// const btnNavbar = document.querySelector('.btn-navbar')

// navLink.forEach(n => n.addEventListener("click", closeMenu));
// btnNavbar.addEventListener('click', closeMenu)

// function closeMenu() {
//     hamburger.classList.remove("active");
//     navMenu.classList.remove("active");
// }