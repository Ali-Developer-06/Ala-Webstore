//* <!-- ===== Home Page Script ===== -->

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav_menu');
    hamburger.addEventListener('click', ()=>{
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    })
    navMenu.addEventListener('click', ()=>{
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    })

//* <!-- ===== Add to cart Page Script ===== -->

