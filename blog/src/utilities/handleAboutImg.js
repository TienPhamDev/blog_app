import imageSmall from "../images/image-workspace-small.jpg";
import imageLarge from "../images/image-workspace-large.jpg";
const handleAboutImg = (element) => {
    const width = window.innerWidth
    const image = width < 640 ? imageSmall : imageLarge
    element.innerHTML = `
        <img src=${image} alt="About Image" class="w-full h-auto rounded-[12px] object-cover" />`
}
export default handleAboutImg;