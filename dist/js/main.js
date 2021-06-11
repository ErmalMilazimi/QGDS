const loader = document.querySelector(".loader");
window.addEventListener("load", () => {
  setTimeout(function () {
    loader.parentElement.removeChild(loader);
  }, 10);
});

const sectionOne = document.querySelector("header");
const navLogo = document.querySelector(".logo");
const nav = document.querySelector("nav");

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
    } else {
      navLogo.classList.remove("active");
      nav.classList.remove("active");
    }
  });
},
sectionOneOptions);

sectionOneObesrver.observe(sectionOne);
