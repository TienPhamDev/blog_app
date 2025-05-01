import '../styles.css'
import moon from '../images/icon-moon.svg'
import logo from '../images/image-avatar.jpg'
import menuBtn from '../utilities/menuBtn.js'
import theme from '../utilities/theme.js';
import latestPosts from '../render/latestPosts.js';
import activeLink from '../utilities/activeLink.js';
import URL from './domainURL.js';
const Home = () => {
    const htmlContent= `<div class="container md:w-[640px] mx-auto px-[16px] py-[16px]">
    <header class="flex dark:bg-neutral-800 border-1 border-neutral-200 dark:border-neutral-600 bg-white justify-between items-center p-1 rounded-[12px] ">
      <div id="logo">
        <img src=${logo} alt="Logo" class="size-10 rounded-[12px]"/>
      </div>
      <div class="flex justify-center items-center gap-2">
        <button id="menu" type="button" class="md:hidden p-2 dark:bg-neutral-900 rounded-[12px] size-10 transition-colors duration-300 ease-in-out flex justify-center items-center">
          <svg id="menu-open" class="dark:text-white text-neutral-900" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.5 10h15m-15-5h15m-15 10h15"/></svg>
          <svg id="menu-close" class="hidden" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20"><path stroke="#FEFEFE" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 5 5 15M5 5l10 10"/></svg>
        </button>
        <nav id="nav-tablet" class="hidden md:block mx-4">
          <ul class="flex gap-6">
            <li ><a href="${URL}" data-link class="nav-link">Home</a></li>
            <li ><a href="${URL}blog" data-link class="nav-link">Blog</a></li>
            <li ><a href="${URL}about" data-link class="nav-link">About</a></li>
            <li ><a href="${URL}newsletter" data-link class="nav-link">Newsletter</a></li>
          </ul>
        </nav>
        <button id="darkmode" type="button" class="bg-neutral-200 dark:bg-neutral-900 transition-colors duration-300 ease-in-out size-10 p-2 rounded-[12px] flex justify-center items-center">
            <img src=${moon} alt="Dark Mode" />    
        </button>
      </div>
    </header>
      <div class="border-1 border-t-0 border-b-0 border-neutral-200 dark:border-neutral-600 mx-2">
        <main class="mx-2 pt-4 px-2">
          <nav id="nav-mobile" class="hidden left-[-7%] w-[114%] relative mb-[16px]">
            <ul class="bg-white border-1 border-neutral-200 dark:border-neutral-600 dark:bg-neutral-800 dark:text-neutral-300 px-4 text-[18px] tracking-[-0.2px] rounded-[12px] leading-[150%] text-neutral-600 font-light">
              <li class='border-b-1 border-neutral-200 dark:border-neutral-600 py-2'><a href="${URL}" data-link >Home</a></li>
              <li class='border-b-1 border-neutral-200 dark:border-neutral-600 py-2'><a href="${URL}blog" data-link >Blog</a></li>
              <li class='border-b-1 border-neutral-200 dark:border-neutral-600 py-2'><a href="${URL}about" data-link >About</a></li>
              <li class='py-2'><a href="${URL}newsletter" data-link >Newsletter</a></li>
            </ul>
          </nav>  
          <article class="mt-[16px]">
            <h1 class="z-10 mb-[32px] font-black text-[32px] relative before:absolute before:bottom-[20%] before:z-[-10] before:w-[308px] before:h-[6px] before:bg-[#93cffc]">Hi ! I'm Tien Pham 👋</h1>
            <p>I’m on a journey to become a front-end web developer. I love building little projects, trying out new coding techniques, and sharing what I learn along the way. When I’m not at my desk, you’ll find me reading, hiking through the mountains, or challenging myself on rock-climbing walls.
      I started this blog to document my progress, keep myself accountable, and hopefully inspire anyone else who’s learning to code. Welcome to my corner of the internet, and thanks for stopping by!
            </p>
            <p>When I’m not coding, I love getting lost in a good book. My taste is pretty eclectic: I’ll happily read everything from fantasy novels to biographies of tech pioneers. Reading helps me unwind and often sparks new ideas for my coding projects.
            </p>
            <section id="social-media">
              <ul class="flex gap-4 my-[32px] items-center">
                <li class="social-media-item">
                  <a href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16" fill="none" viewBox="0 0 18 16"><path fill="currentColor" d="m.399 0 6.6 8.825L.357 16h1.495l5.815-6.282L12.365 16h5.087l-6.971-9.321L16.663 0h-1.495L9.813 5.785 5.486 0H.399Zm2.198 1.101h2.337L15.254 14.9h-2.337L2.597 1.1Z"/></svg>
                  </a>
                </li>
                <li class="social-media-item">
                  <a href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="17" fill="none" viewBox="0 0 18 17"><path fill="currentColor" d="M6.195 13.503c0 .066-.066.1-.165.1-.1.032-.166-.034-.166-.1s.067-.132.166-.132.165.066.165.132Zm-1.024-.165c.033-.066.132-.099.23-.066.1.033.133.1.133.165a.159.159 0 0 1-.198.066c-.1 0-.165-.099-.165-.165Zm1.486-.033c.066-.033.166.033.166.1.033.065-.034.098-.133.131s-.198 0-.198-.066c0-.099.066-.165.165-.165ZM8.805.62c4.592 0 8.325 3.502 8.325 8.06 0 3.668-2.247 6.806-5.55 7.897-.43.099-.595-.166-.595-.397 0-.264.033-1.652.033-2.742 0-.793-.264-1.288-.562-1.553 1.85-.198 3.8-.462 3.8-3.634 0-.925-.33-1.354-.86-1.949.067-.23.364-1.09-.098-2.246-.694-.231-2.28.892-2.28.892-.66-.198-1.354-.264-2.081-.264-.694 0-1.388.066-2.048.264 0 0-1.62-1.09-2.28-.892C4.147 5.21 4.411 6.07 4.51 6.3c-.529.595-.793 1.024-.793 1.95 0 3.171 1.883 3.435 3.733 3.633-.264.232-.462.595-.528 1.124-.496.231-1.685.594-2.412-.694a1.77 1.77 0 0 0-1.288-.859c-.793 0-.034.529-.034.529.53.23.892 1.189.892 1.189.496 1.486 2.809.991 2.809.991v2.048c0 .198-.133.463-.562.397C3.023 15.485.744 12.347.744 8.679c0-4.558 3.502-8.06 8.06-8.06ZM3.948 12.017c.033-.033.1 0 .166.033.066.066.066.165.033.198-.067.033-.133 0-.199-.033-.033-.066-.066-.165 0-.198Zm-.363-.265c.033-.033.066-.033.132 0s.1.066.1.1c-.034.066-.1.066-.166.032-.066-.033-.1-.066-.066-.132Zm1.057 1.19c.066-.066.165-.033.231.033s.066.165.033.198c-.033.066-.132.033-.198-.033-.099-.066-.099-.165-.066-.198Zm-.363-.496c.066-.033.132 0 .198.066.033.066.033.165 0 .198-.066.033-.132 0-.198-.066s-.066-.165 0-.198Z"/></svg>
                  </a>
                </li>
                <li class="social-media-item">
                  <a href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16"><path fill="currentColor" d="M3.646 15.25H.476V5.057h3.17V15.25ZM2.044 3.694c-.989 0-1.807-.853-1.807-1.875C.237.83 1.055.012 2.044.012c1.022 0 1.84.818 1.84 1.807 0 1.022-.818 1.875-1.84 1.875ZM12.339 15.25v-4.943c0-1.193-.034-2.693-1.67-2.693-1.637 0-1.875 1.261-1.875 2.59v5.046h-3.17V5.057h3.033v1.398h.034c.443-.784 1.466-1.636 3-1.636 3.205 0 3.818 2.113 3.818 4.84v5.591h-3.17Z"/></svg>
                  </a>
                </li>
                <li class="social-media-item">
                  <a href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16" fill="none" viewBox="0 0 18 16"><path fill="currentColor" d="M17.423 8.389a.553.553 0 0 1-.224-.048l-4.696-2.098a.547.547 0 0 1 0-.997l4.696-2.09a.549.549 0 0 1 .723.276.548.548 0 0 1-.277.72l-3.579 1.593 3.58 1.6a.546.546 0 0 1-.223 1.044ZM11.022 15.999c-5.163 0-9.678-3.477-10.976-8.455a.547.547 0 0 1 1.059-.275 10.242 10.242 0 0 0 9.917 7.639.547.547 0 1 1 0 1.09ZM9.137 11.467a.547.547 0 0 1-.547-.546V.547a.547.547 0 0 1 1.094 0V10.92a.547.547 0 0 1-.547.546Z"/></svg>
                  </a>
                </li>
              </ul>
            </section>
          </article>
          <hr class="border-neutral-200 dark:border-neutral-600 "/>
          <section id="latest-posts" class="pb-[32px]">  
            <h2 class="my-[32px] text-[28px] font-black relative after:absolute after:bg-[#93cffc] after:w-[44px] after:h-[4px] after:bottom-[25%] md:after:left-[38%] after:left-[62%]">Latest Articles</h2>
            <div id="posts">
            </div>
            <div class="py-[16px] ">
              <h3><a href="${URL}blog" class="text-lg border-b-4 border-[#93cffc]" >Views all articles</a></h3>
            </div>
          </section>
          <hr class="border-neutral-200 dark:border-neutral-600 "/>
        </main>
        <footer class="flex justify-between px-4 items-center py-[16px]">
          <p>Made with ❤️ and ☕️.</p>
          <section id="social-media">
              <ul class="flex gap-1 items-center">
                <li class="social-media-item">
                  <a href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16" fill="none" viewBox="0 0 18 16"><path fill="currentColor" d="m.399 0 6.6 8.825L.357 16h1.495l5.815-6.282L12.365 16h5.087l-6.971-9.321L16.663 0h-1.495L9.813 5.785 5.486 0H.399Zm2.198 1.101h2.337L15.254 14.9h-2.337L2.597 1.1Z"/></svg>
                  </a>
                </li>
                <li class="social-media-item">
                  <a href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="17" fill="none" viewBox="0 0 18 17"><path fill="currentColor" d="M6.195 13.503c0 .066-.066.1-.165.1-.1.032-.166-.034-.166-.1s.067-.132.166-.132.165.066.165.132Zm-1.024-.165c.033-.066.132-.099.23-.066.1.033.133.1.133.165a.159.159 0 0 1-.198.066c-.1 0-.165-.099-.165-.165Zm1.486-.033c.066-.033.166.033.166.1.033.065-.034.098-.133.131s-.198 0-.198-.066c0-.099.066-.165.165-.165ZM8.805.62c4.592 0 8.325 3.502 8.325 8.06 0 3.668-2.247 6.806-5.55 7.897-.43.099-.595-.166-.595-.397 0-.264.033-1.652.033-2.742 0-.793-.264-1.288-.562-1.553 1.85-.198 3.8-.462 3.8-3.634 0-.925-.33-1.354-.86-1.949.067-.23.364-1.09-.098-2.246-.694-.231-2.28.892-2.28.892-.66-.198-1.354-.264-2.081-.264-.694 0-1.388.066-2.048.264 0 0-1.62-1.09-2.28-.892C4.147 5.21 4.411 6.07 4.51 6.3c-.529.595-.793 1.024-.793 1.95 0 3.171 1.883 3.435 3.733 3.633-.264.232-.462.595-.528 1.124-.496.231-1.685.594-2.412-.694a1.77 1.77 0 0 0-1.288-.859c-.793 0-.034.529-.034.529.53.23.892 1.189.892 1.189.496 1.486 2.809.991 2.809.991v2.048c0 .198-.133.463-.562.397C3.023 15.485.744 12.347.744 8.679c0-4.558 3.502-8.06 8.06-8.06ZM3.948 12.017c.033-.033.1 0 .166.033.066.066.066.165.033.198-.067.033-.133 0-.199-.033-.033-.066-.066-.165 0-.198Zm-.363-.265c.033-.033.066-.033.132 0s.1.066.1.1c-.034.066-.1.066-.166.032-.066-.033-.1-.066-.066-.132Zm1.057 1.19c.066-.066.165-.033.231.033s.066.165.033.198c-.033.066-.132.033-.198-.033-.099-.066-.099-.165-.066-.198Zm-.363-.496c.066-.033.132 0 .198.066.033.066.033.165 0 .198-.066.033-.132 0-.198-.066s-.066-.165 0-.198Z"/></svg>
                  </a>
                </li>
                <li class="social-media-item">
                  <a href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16"><path fill="currentColor" d="M3.646 15.25H.476V5.057h3.17V15.25ZM2.044 3.694c-.989 0-1.807-.853-1.807-1.875C.237.83 1.055.012 2.044.012c1.022 0 1.84.818 1.84 1.807 0 1.022-.818 1.875-1.84 1.875ZM12.339 15.25v-4.943c0-1.193-.034-2.693-1.67-2.693-1.637 0-1.875 1.261-1.875 2.59v5.046h-3.17V5.057h3.033v1.398h.034c.443-.784 1.466-1.636 3-1.636 3.205 0 3.818 2.113 3.818 4.84v5.591h-3.17Z"/></svg>
                  </a>
                </li>
                <li class="social-media-item">
                  <a href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16" fill="none" viewBox="0 0 18 16"><path fill="currentColor" d="M17.423 8.389a.553.553 0 0 1-.224-.048l-4.696-2.098a.547.547 0 0 1 0-.997l4.696-2.09a.549.549 0 0 1 .723.276.548.548 0 0 1-.277.72l-3.579 1.593 3.58 1.6a.546.546 0 0 1-.223 1.044ZM11.022 15.999c-5.163 0-9.678-3.477-10.976-8.455a.547.547 0 0 1 1.059-.275 10.242 10.242 0 0 0 9.917 7.639.547.547 0 1 1 0 1.09ZM9.137 11.467a.547.547 0 0 1-.547-.546V.547a.547.547 0 0 1 1.094 0V10.92a.547.547 0 0 1-.547.546Z"/></svg>
                  </a>
                </li>
              </ul>
            </section>
        </footer>
      </div>
  </div>`

    return htmlContent;
}

const initializeEventsHomePage = (path) => {
    // Menu button toggle
    const menuButton = document.querySelector('#menu');
    const navMobile = document.querySelector('#nav-mobile');
    if (menuButton && navMobile) {
        menuBtn(menuButton, navMobile);
    }

    // Dark mode toggle
    const darkModeButton = document.querySelector('#darkmode');
    if (darkModeButton) {
        theme(darkModeButton);
    }

    // Render latest posts
    const postsContainer = document.querySelector('#posts');
    if (postsContainer) {
        latestPosts(path,postsContainer);
    }

    // Highlight active link
    activeLink();
};
export {Home, initializeEventsHomePage};