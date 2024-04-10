// ! toggle icon navbar
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("fa-x");
  navbar.classList.toggle("active");
};

// ! Scroll Section Active link
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");
window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");
    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
  // ! Sticky Navbar
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);

  //! Removing toggle icon and navbar,When click navbar link(Scroll)
  menuIcon.classList.remove("fa-x");
  navbar.classList.remove("active");
};

//! Scroll Reveal
ScrollReveal({
  // reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".home-content,.heading", { origin: "top" });
ScrollReveal().reveal(
  ".home-image, .services-container, .portfolio-box, .contact form",
  {
    origin: "bottom",
  }
);

ScrollReveal().reveal(".home-content h1, .about-img", {
  origin: "left",
});
ScrollReveal().reveal(".home-content p, .about-content", {
  origin: "right",
});

// !Typed Texts
const typed = new Typed(".multiple-text", {
  strings: ["Full Stack Developer", "Web Developer", "ReactJs Developer"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});
