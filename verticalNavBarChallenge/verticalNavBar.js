let navbarLinks = document.getElementsByClassName("navbar__links");

// [...navbarLinks] or Array.from(navbarLinks)

[...navbarLinks].forEach((navbarLink) => {
  navbarLink.addEventListener("click", () => {
    let currentActiveNavLink = document.getElementsByClassName("active");

    if (currentActiveNavLink.length != 0) {
      currentActiveNavLink[0].classList.remove("active");
    }

    navbarLink.classList.add("active");
  })
})