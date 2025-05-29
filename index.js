$(window).on('load', function(){
    $('.spin-wrapper').fadeOut(800);
});

const navLinks = document.querySelector('.nav-links')
function onToggleMenu(e){
    e.name= e.name ==='close' ? 'menu' : 'close'
    navLinks.classList.toggle('top-[-100px]')
}