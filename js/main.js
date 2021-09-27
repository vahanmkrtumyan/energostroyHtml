scrollTo = (element) => {
  window.scroll({
    behavior: "smooth",
    left: 0,
    top: element.offsetTop,
  });
};

document.getElementById("header").addEventListener("click", () => {
  scrollTo(document.getElementById("headerNew"));
});

document.getElementById("about").addEventListener("click", () => {
  scrollTo(document.getElementById("aboutNew"));
});

document.getElementById("service").addEventListener("click", () => {
  scrollTo(document.getElementById("serviceNew"));
});

document.getElementById("contactUs").addEventListener("click", () => {
  scrollTo(document.getElementById("contactUsNew"));
});

document.getElementById("header1").addEventListener("click", () => {
  scrollTo(document.getElementById("headerNew"));
  $(".responsive-mobile-menu").removeClass("active");
});

document.getElementById("about1").addEventListener("click", () => {
  scrollTo(document.getElementById("aboutNew"));
  $(".responsive-mobile-menu").removeClass("active");
});

document.getElementById("service1").addEventListener("click", () => {
  scrollTo(document.getElementById("serviceNew"));
  $(".responsive-mobile-menu").removeClass("active");
});

document.getElementById("contactUs1").addEventListener("click", () => {
  scrollTo(document.getElementById("contactUsNew"));
  $(".responsive-mobile-menu").removeClass("active");
});

const services = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
];

services.forEach((service) => {
  document
    .getElementById(`advs-box${service}`)
    .addEventListener("mouseenter", () => {
      document.getElementById(`advs-box${service}-img`).classList.add("scale");
      document
        .getElementById(`advs-box${service}-content`)
        .classList.add("content-hovered");
    });

  document
    .getElementById(`advs-box${service}`)
    .addEventListener("mouseleave", () => {
      document
        .getElementById(`advs-box${service}-img`)
        .classList.remove("scale");
      document
        .getElementById(`advs-box${service}-content`)
        .classList.remove("content-hovered");
    });
});

// var backToTop = document.getElementById("back-top");

// window.addEventListener('scroll', function() {
//  var Y = window.scrollY;
//  if (Y > 500) {
//   backToTop.classList.add("active");
//  } else {
//   backToTop.classList.remove("active");
//  }
// });
