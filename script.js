document.addEventListener('DOMContentLoaded', () =>{

    const humburgerMenu = document.querySelector(".humburger-container");
    const navigationList = document.querySelector(".navlist");

    // open navigation list
    humburgerMenu.addEventListener('click', () =>{
        humburgerMenu.classList.toggle("active");
        navigationList.classList.toggle("active");
    });
});