
/**
 * Define Global Variables
 */

const sections = document.getElementsByTagName("section");
const nav = document.getElementsByClassName("navbar__menu");

// build the nav

function buildNav() {
  const navBarList = document.querySelector("ul");
  navBarList.id = "navbar__list";

  for (const section of sections) {
    const listItem = document.createElement("li");
    listItem.innerHTML = `<a href="#${section.id}" class="menu__link" data-id="${section.id}">${section.dataset.nav}</a>`;
    navBarList.appendChild(listItem);
  }
};

// Add class 'active' to section when near top of viewport

function Active() {
  for (const section of sections) {
    const box = section.getBoundingClientRect();
    const id = document.querySelectorAll(`[data-id="${section.id}"]`);
    if (box.top <= 300 && box.bottom >= 300) {
      section.classList.add("your-active-class");
      id.classList.add("active");
    } else {
      section.classList.remove("your-active-class");
      console.log(id);
    }
  }
};

// Build menu
buildNav() 

// Set sections as active
document.addEventListener("scroll", function () {
  Active();
});
