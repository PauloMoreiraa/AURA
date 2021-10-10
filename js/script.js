const navbar = document.querySelector('.navbar');

window.onscroll = () => {
    this.scrollY > 20 
        ? navbar.classList.add("sticky") 
        : navbar.classList.remove("sticky");
}

// window.onscroll = () => {
//     this.scrollY > 20 
//         ? console.log("cor") 
//         : console.log("semcor");
// }

const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(){
    const nav = document.getElementById('nav');
    nav.classList.toggle('active')
}

btnMobile.addEventListener('click', toggleMenu);

