function onScrollEvent(){
    const navbar = document.getElementById("navbar");
    const logo = document.getElementById("logo");
    if (window.scrollY > 50) {
        navbar.classList.add("bg-opacity-90");
        logo.classList.remove("my-6","md:h-24");
        logo.classList.add("my-2","md:h-14");
    } else {
        navbar.classList.add("bg-opacity-40");
        navbar.classList.remove("bg-opacity-90");
        logo.classList.remove("my-2", "md:h-14");
        logo.classList.add("my-6","md:h-24");
    }
}