
var navBarList = document.getElementsByClassName('navbar__list');
var navBarLinks = document.getElementsByClassName('navbar__links');

Array.from(navBarLinks).forEach(navBarLink => {
  navBarLink.addEventListener("click", () => {
    let currentActiveLink = document.getElementsByClassName("active");
    // currentActiveLink[0].className = currentActiveLink[0].className.replace(" active", "");
    currentActiveLink[0].classList.remove("active");

    // navBarLink.className += " active";
    navBarLink.classList.add("active");
  })
});