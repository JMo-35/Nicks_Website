const scrollUp = document.getElementById("scroll-up");

const burger = document.getElementById("burger-menu");
const ul = document.getElementById("nav ul");
const nav = document.querySelector("nav");

const navLink = document.querySelectorAll(".nav-link");

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

burger.addEventListener('click', () => {
  ul.classList.toggle('show');
});

navLink.forEach((link) =>
  link.addEventListener('click', () => {
    ul.classList.remove('show');
  })
);