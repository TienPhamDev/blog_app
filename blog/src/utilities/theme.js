import sun from '../images/icon-sun.svg';
const theme = (element) => {
    const html = document.querySelector('html');
    const theme = localStorage.getItem('theme');
    if(theme === 'dark'){
        html.classList.add('dark');
        const img = document.querySelector('#darkmode img');
        img.src = sun;
    }
    else{
        html.classList.remove('dark');
    }
    element.addEventListener('click', () => {
        const html = document.querySelector('html');
        if(html.classList.contains('dark')){
            localStorage.setItem('theme', 'light');
        }
        else{
            localStorage.setItem('theme', 'dark');
        }
        html.classList.toggle('dark');
        const img = document.querySelector('#darkmode img');
        img.src = img.src === sun ? '../images/icon-moon.svg' : sun;
    })
}
export default theme;