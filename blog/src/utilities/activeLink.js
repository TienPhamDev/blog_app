const activeLink = () => {
    const links = document.querySelectorAll('.nav-link');
    const currentPath = location.href;
    
    links.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
        link.classList.add('font-bold',"border-b-2",'dark:text-white',"border-b-spBlue");
        } else {
        link.classList.remove('font-bold','dark:text-white',"border-b-2","border-b-spBlue");
        }
    });
}
export default activeLink;