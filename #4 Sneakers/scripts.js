// ----------------show menu---------------
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close');


    if(navToggle){
        navToggle.addEventListener('click',() =>{
            navMenu.classList.add('show-item');
        })
    }

    if(navClose){
        navClose.addEventListener('click',() =>{
            navMenu.classList.remove('show-item');
        })
    }

// ---------------remove menu mobile--------------------
    const navLink = document.querySelectorAll('.nav--link');
    
    const linkAction = () =>{
        const navMenu = document.getElementById('nav-menu');
        navMenu.classList.remove('show-item')
    }
    navLink.forEach(n=>n.addEventListener('click',linkAction))



    /* -----------------------Bg header------------------*/

   const bgHeader = () =>{
 
   const header = document.getElementById('header')

   this.scrollY >= 50 ? header.classList.add('bg-header')
                      : header.classList.remove('bg-header')
}
window.addEventListener('scroll',bgHeader)