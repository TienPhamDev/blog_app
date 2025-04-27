import sun from '../images/icon-sun.svg';
const theme = (element) => {
    element.addEventListener('click', () => {
        const html = document.querySelector('html');
        html.classList.toggle('dark');
        const img = document.querySelector('#darkmode img');
        img.src = img.src === sun ? '../images/icon-moon.svg' : sun;
    })
}
export default theme;