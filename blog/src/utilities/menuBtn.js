import menuSvg from '../images/icon-menu.svg';
import menuClose from '../images/icon-menu-close.svg';
const menuBtn = (menuBtn,navMobile) => {
    const svgOpen = document.querySelector('#menu-open');    
    const svgClose = document.querySelector('#menu-close');
    menuBtn.addEventListener('click', () => {
        menuBtn.classList.toggle('bg-neutral-800');
        svgOpen.classList.toggle('hidden');
        svgClose.classList.toggle('hidden');
        // Toggle the hidden class on the nav element
        navMobile.classList.toggle('hidden');
    });
    
}
export default menuBtn;