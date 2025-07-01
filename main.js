const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
    if(window.scrollY > navbar.offsetTop) {
        navbar.classList.add("fixed", "top-0", "left-0", "right-0");
    } else {
        navbar.classList.remove("fixed", "top-0", "left-0", "right-0");
    }
});