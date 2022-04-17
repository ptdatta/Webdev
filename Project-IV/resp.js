burger=document.querySelector('.burger')
navber=document.querySelector('.navber')
navlist=document.querySelector('.nav-list')
rightnav=document.querySelector('.rightnav')

burger.addEventListener('click',()=>{
    rightnav.classList.toggle('v-class');
    navlist.classList.toggle('v-class');
    navbar.classList.toggle('h-nav');
})