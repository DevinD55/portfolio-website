const hamburger = document.getElementById("hamburger");

const navBar = document.getElementsByClassName("nav-bar")[0];

console.log(navBar)

const openHamburger = () => {
    if (navBar.style.display === "none") {
        navBar.style.display = "flex";
    } else {
        navBar.style.display = "none";
        
    }
}

hamburger.addEventListener("click", function() {
    openHamburger();
});

