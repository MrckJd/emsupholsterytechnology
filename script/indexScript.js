function onScrollEvent(){
    const navbar = document.getElementById("navbar");
    if (window.scrollY > 50) {
        navbar.classList.remove("bg-opacity-20");
    } else {
        navbar.classList.add("bg-opacity-20");
    }
}