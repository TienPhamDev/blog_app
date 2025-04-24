import menuSvg from '../images/icon-menu.svg';
import menuClose from '../images/icon-menu-close.svg';
const menuBtn = (menuBtn,navMobile) => {
    const imgMenu = document.querySelector('#menu img');
    
    
    menuBtn.addEventListener('click', () => {
        menuBtn.classList.toggle('bg-neutral-800');
        imgMenu.src = imgMenu.src === menuSvg ? menuClose : menuSvg;

        // Toggle the hidden class on the nav element
        navMobile.classList.toggle('hidden');
    });
    
}
export default menuBtn;