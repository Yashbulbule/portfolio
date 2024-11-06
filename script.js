let menuIcon = document.querySelector('menu-icon');
let navbar = document.querySelector('navbar');
let sections = document.querySelector('section');
let navLinks = document.querySelector('header nav a');
window.onscroll = () =>{
    sections.forEach(sec=>{
        let top = window.scrolly;
        let offset = sec.offTop = 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute;
    })
}




menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    menuIcon.classList.toggle('active');


}