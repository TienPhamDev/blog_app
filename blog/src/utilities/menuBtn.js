// import menuSvg from '../public/images/icon-menu.svg'
// import menuClose from '../public/images/icon-menu-close.svg';
const menuBtn = () => {
    const menuButton = document.querySelector('#menu');
    const imgMenu = document.querySelector('#menu img');
    // Select the nav element
    const nav = document.querySelector('nav');
    
    menuButton.addEventListener('click', () => {
        menuButton.classList.toggle('bg-neutral-900');

        // Toggle the hidden class on the nav element
        nav.classList.toggle('hidden');
    });
    
}
export default menuBtn;