const navCheckbox = document.querySelector("#check");
const navMenu = document.querySelector("nav ul");

navCheckbox.addEventListener("change", () => {
  if (navCheckbox.checked) {
    navMenu.style.left = "0";
  } else {
    navMenu.style.left = "-100%";
  }
});


const navLinks = document.querySelectorAll("nav ul li a");

navLinks.forEach(link => {
  link.addEventListener("click", event => {
    event.preventDefault();
    const targetId = link.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop - 85,
        behavior: "smooth",
      });
    }
  });
});


const sections = document.querySelectorAll("section");
window.addEventListener("scroll", () => {
  let currentSection = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (window.scrollY >= sectionTop) {
      currentSection = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href").substring(1) === currentSection) {
      link.classList.add("active");
    }
  });
});

const aboutLink = document.querySelector('a[href="#about"]');
const aboutSection = document.querySelector('#about');

aboutLink.addEventListener('click', (event) => {
  event.preventDefault(); // Prevent default link behavior
  aboutSection.scrollIntoView({
    behavior: 'smooth',
    block: 'start', // Ensures the section aligns at the top of the viewport
  });
});
