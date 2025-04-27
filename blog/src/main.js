import './styles.css'
import logoX from './images/logo-x.svg';
import logoGithub from './images/logo-github.svg';
import logoLinkedin from './images/logo-linkedin.svg';
import logoFrontend from './images/logo-frontend-mentor.svg';  
import menuSvg from './images/icon-menu.svg'
import moon from './images/icon-moon.svg'
import logo from './images/image-avatar.jpg'
import menuBtn from './utilities/menuBtn.js'
import theme from './utilities/theme.js';
import latestPosts from './render/latestPosts.js';

document.querySelector('#app').innerHTML = `
  <div class="container mx-auto bg-neutral-100 dark:bg-neutral-900 px-[16px] transition-colors duration-300 ease-in-out py-[16px]">
    <header class="flex dark:bg-neutral-800 border-1 border-neutral-200 dark:border-neutral-600 bg-white justify-between items-center p-1 rounded-[12px] ">
      <div id="logo">
        <img src=${logo} alt="Logo" class="size-10 rounded-[12px]"/>
      </div>
      <div class="flex justify-center items-center gap-2">
        <button id="menu" type="button" class="p-2 dark:bg-neutral-900 rounded-[12px] size-10 transition-colors duration-300 ease-in-out flex justify-center items-center">
          <img src=${menuSvg} alt="Menu" class/>
        </button>
        <nav id="nav-tablet" class="hidden">
          <ul class="">
            <li ><a href="#home">Home</a></li>
            <li ><a href="#about">Blog</a></li>
            <li ><a href="#contact">About</a></li>
            <li ><a href="#newsletter">Newsletter</a></li>
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
            <ul class="bg-white border-1 border-neutral-200 px-4 text-[18px] tracking-[-0.2px] rounded-[12px] leading-[150%] text-neutral-600 font-light">
              <li class='border-b-1 border-neutral-200 py-2'><a href="#home">Home</a></li>
              <li class='border-b-1 border-neutral-200 py-2'><a href="#about">Blog</a></li>
              <li class='border-b-1 border-neutral-200 py-2'><a href="#contact">About</a></li>
              <li class='py-2'><a href="#newsletter">Newsletter</a></li>
            </ul>
          </nav>  
          <article class="mt-[16px]">
            <h1 class="z-10 mb-[32px] font-black text-[32px] relative before:absolute before:bottom-[20%] before:z-[-10] before:w-[264px] before:h-[6px] before:bg-[#93cffc]">Hi ! I'm Tien Pham 👋</h1>
            <p>I’m on a journey to become a front-end web developer. I love building little projects, trying out new coding techniques, and sharing what I learn along the way. When I’m not at my desk, you’ll find me reading, hiking through the mountains, or challenging myself on rock-climbing walls.
      I started this blog to document my progress, keep myself accountable, and hopefully inspire anyone else who’s learning to code. Welcome to my corner of the internet, and thanks for stopping by!
            </p>
            <section id="social-media">
              <ul class="flex gap-4 my-[32px] items-center">
                <li class="bg-white flex justify-center items-center rounded-[12px] size-10 border-1 border-neutral-200 p-2">
                  <a href="#">
                    <img src=${logoX} alt="Logo X" />
                  </a>
                </li>
                <li class="bg-white flex justify-center items-center rounded-[12px] size-10 border-1 border-neutral-200 p-2">
                  <a href="#">
                    <img src=${logoGithub} alt="Logo Github" />
                  </a>
                </li>
                <li class="bg-white flex justify-center items-center rounded-[12px] size-10 border-1 border-neutral-200 p-2">
                  <a href="#">
                    <img src=${logoLinkedin} alt="Logo Linkedin" />
                  </a>
                </li>
                <li class="bg-white flex justify-center items-center rounded-[12px] size-10 border-1 border-neutral-200 p-2">
                  <a href="#">
                    <img src=${logoFrontend} alt="Logo Frontend Mentor" />
                  </a>
                </li>
              </ul>
            </section>
          </article>
          <section id="latest-posts" class="border-t-1 border-neutral-200 dark:border-neutral-600">  
            <h2 class="my-[32px] text-[28px] font-black relative after:absolute after:bg-[#93cffc] after:w-[44px] after:h-[4px] after:bottom-[25%] after:left-[62%]">Latest Articles</h2>
            <div id="posts">
            </div>
            <div class="py-[16px] border-b-1 border-neutral-200 dark:border-neutral-600">
              <a href="#" class="text-lg border-b-4 border-[#93cffc]" >Views all articles</a>
            </div>
          </section>
        </main>
        <footer class="flex justify-between px-4 items-center ">
          <p>Made with ❤️ and ☕️.</p>
          <section id="social-media">
              <ul class="flex gap-1 my-[32px] items-center">
                <li class="bg-white flex justify-center items-center rounded-[12px] size-8 border-1 border-neutral-200 p-2">
                  <a href="#">
                    <img src=${logoX} alt="Logo X" />
                  </a>
                </li>
                <li class="bg-white flex justify-center items-center rounded-[12px] size-8 border-1 border-neutral-200 p-2">
                  <a href="#">
                    <img src=${logoGithub} alt="Logo Github" />
                  </a>
                </li>
                <li class="bg-white flex justify-center items-center rounded-[12px] size-8 border-1 border-neutral-200 p-2">
                  <a href="#">
                    <img src=${logoLinkedin} alt="Logo Linkedin" />
                  </a>
                </li>
                <li class="bg-white flex justify-center items-center rounded-[12px] size-8 border-1 border-neutral-200 p-2">
                  <a href="#">
                    <img src=${logoFrontend} alt="Logo Frontend Mentor" />
                  </a>
                </li>
              </ul>
            </section>
        </footer>
      </div>
  </div>
`

menuBtn(document.querySelector('#menu'),document.querySelector('#nav-mobile'));
latestPosts(document.querySelector('#posts'));
theme(document.querySelector('#darkmode'));