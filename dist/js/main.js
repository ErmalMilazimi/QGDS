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
//

function sendMail() {
  if (checkInputs()) {
  } else {
    var inputs = document.querySelectorAll("input");
    var textarea = document.querySelector("textarea");
    var message = "- - - - - - - - - - - -\n";
    for (let i = 0; i < inputs.length; i++) {
      if (i === 0) {
        message += "Firstname:" + inputs[0].value + "\n\n";
      }
      if (i === 1) {
        message += "Lastname: " + inputs[1].value + "\n\n";
      }
      if (i === 2) {
        message += "Location: " + inputs[2].value + "\n\n";
      }
      if (i === 3) {
        message += "Date: " + inputs[3].value + "\n\n";
      }
      if (i === 4) {
        message += "Number: " + inputs[4].value + "\n\n";
      }
    }
    message += "Services: ";
    for (let i = 5; i < inputs.length; i++) {
      if (i === 5 && inputs[5].checked) {
        message += inputs[5].value + ", ";
      }
      if (i === 6 && inputs[6].checked) {
        message += inputs[6].value + ", ";
      }
      if (i === 7 && inputs[7].checked) {
        message += inputs[7].value + ", ";
      }
      if (i === 8 && inputs[8].checked) {
        message += inputs[8].value + ", ";
      }
      if (i === 9 && inputs[9].checked) {
        message += inputs[9].value + ", ";
      }
      if (i === 10 && inputs[10].checked) {
        message += inputs[10].value;
      }
    }
    message += "\n\nComent: " + textarea.value + "\n- - - - - - - - - - - -\n";
    message = message.replace(/<br\s*\/?>/gm, "%0D%0A");
    var link =
      "mailto:milazimi39@gmail.com" +
      "?cc=milazimi39@gmail.com" +
      "&subject=" +
      encodeURIComponent("New Work") +
      "&body=" +
      encodeURIComponent(message);
    window.location.href = link;
    inputs.forEach((e) => {
      e.value = "";
      if (e.checked) {
        e.checked = false;
      }
    });
    textarea.value = "";
  }
}
const checkInputs = () => {
  var inputs = document.querySelectorAll("input");
  for (let i = 0; i < inputs.length; i++) {
    let elementType = inputs[i].type;
    if (elementType == "text" && inputs[i].value == "") {
      inputs[i].focus();
      return true;
    } else if (elementType == "date" && inputs[i].value == "") {
      inputs[i].focus();
      return true;
    } else if (elementType == "number" && inputs[i].value == "") {
      inputs[i].focus();
      return true;
    }
  }
  return false;
};
//
const swiper = new Swiper(".swiper-container", {
  direction: "horizontal",
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
