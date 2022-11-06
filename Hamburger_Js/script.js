const hamburgerMenu = document.getElementsByClassName('hamburger_menu')[0] /*getting first element of array*/ 
const navigationLinks = document.getElementsByClassName('nav_links')[0]/*getting first element of array*/ 

hamburgerMenu.addEventListener('click', () => { 
    navigationLinks.classList.toggle('active')
}) 
/*whenever element[Hamburger] is clicked run function 'toggle active class', 
add if active class does not exist, remove if active class exist*/ 