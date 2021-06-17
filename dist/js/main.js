const loader = document.querySelector(".loader");
window.addEventListener("load", () => {
  setTimeout(function () {
    loader.parentElement.removeChild(loader);
  }, 10);
});
const sectionOne = document.querySelector("header");
const navLogo = document.querySelector(".logo");
const nav = document.querySelector("nav");
const navLinks = document.querySelectorAll("nav ul li a");

const sectionOneOptions = {
  rootMargin: "-150px 0px 0px 0px",
};

const sectionOneObesrver = new IntersectionObserver(function (
  entries,
  sectionOneOptions
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      navLogo.classList.add("active");
      nav.classList.add("active");
      navLinks.forEach((e) => {
        e.classList.add("active");
      });
    } else {
      navLogo.classList.remove("active");
      nav.classList.remove("active");
      navLinks.forEach((e) => {
        e.classList.remove("active");
      });
    }
  });
},
sectionOneOptions);

sectionOneObesrver.observe(sectionOne);

if (document.getElementById("scroll-btn") != null) {
  document.getElementById("scroll-btn").addEventListener("click", () => {
    document.querySelector("main").scrollIntoView();
  });
}
let burger = document.getElementById("burger");
let navOpen = document.querySelector(".links");
burger.addEventListener("click", () => {
  burger.classList.toggle("open");
  navOpen.classList.toggle("open");
});

const scrollFadeIn = document.querySelectorAll(".scroll-fade-in");
const fadeInOptions = {
  threshold: 0.2,
  rootMargin: "0px 0px 0px 0px",
};

const appearOnScroll = new IntersectionObserver(function (
  entries,
  appearOnScroll
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("active");
      appearOnScroll.unobserve(entry.target);
    }
  });
},
fadeInOptions);

scrollFadeIn.forEach((element) => {
  appearOnScroll.observe(element);
});
// Swiper Code
const swiper = new Swiper(".swiper-container", {
  direction: "horizontal",
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
//
