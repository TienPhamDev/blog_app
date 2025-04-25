import './styles.css'
import logoX from './images/logo-x.svg';
import logoGithub from './images/logo-github.svg';
import logoLinkedin from './images/logo-linkedin.svg';
import logoFrontend from './images/logo-frontend-mentor.svg';  
import menuSvg from './images/icon-menu.svg'
import moon from './images/icon-moon.svg'
import logo from './images/image-avatar.jpg'
import menuBtn from './utilities/menuBtn.js'

document.querySelector('#app').innerHTML = `
  <div class="container mx-auto bg-neutral-100 px-[16px] py-[16px]">
    <header class="flex border-1 border-neutral-200 bg-white justify-between items-center p-1 rounded-[12px] ">
      <div id="logo">
        <img src=${logo} alt="Logo" class="size-10 rounded-[12px]"/>
      </div>
      <div class="flex justify-center items-center gap-2">
        <button id="menu" type="button" class="p-2 rounded-[12px] size-10 transition-colors duration-300 ease-in-out flex justify-center items-center">
            <img src=${menuSvg} alt="Menu"/>
        </button>
        <nav id="nav-tablet" class="hidden">
          <ul class="">
            <li ><a href="#home">Home</a></li>
            <li ><a href="#about">Blog</a></li>
            <li ><a href="#contact">About</a></li>
            <li ><a href="#newsletter">Newsletter</a></li>
          </ul>
        </nav>
        <button id="darkmode" type="button" class="bg-neutral-200 size-10 p-2 rounded-[12px] flex justify-center items-center">
            <img src=${moon} alt="Dark Mode" />    
        </button>
      </div>
    </header>
    <main class="mx-2 border-1 border-t-0 border-neutral-200 p-2 ">
      <nav id="nav-mobile" class="hidden left-[-4%] w-[108%] relative mb-[16px]">
        <ul class="bg-white border-1 border-neutral-200 px-4 text-[18px] tracking-[-0.2px] rounded-[12px] leading-[150%] text-neutral-600 font-light">
          <li class='border-b-1 border-neutral-200 py-2'><a href="#home">Home</a></li>
          <li class='border-b-1 border-neutral-200 py-2'><a href="#about">Blog</a></li>
          <li class='border-b-1 border-neutral-200 py-2'><a href="#contact">About</a></li>
          <li class='py-2'><a href="#newsletter">Newsletter</a></li>
        </ul>
      </nav>  
      <article class="mt-[16px]">
        <h1 class="z-10 text-bold text-[32px] relative before:absolute before:bottom-[17%] before:z-[-10] before:w-[248px] before:h-[6px] before:bg-amber-600">Hi ! I'm Tien Pham 👋</h1>
        <p>I’m on a journey to become a front-end web developer. I love building little projects, trying out new coding techniques, and sharing what I learn along the way. When I’m not at my desk, you’ll find me reading, hiking through the mountains, or challenging myself on rock-climbing walls.
  I started this blog to document my progress, keep myself accountable, and hopefully inspire anyone else who’s learning to code. Welcome to my corner of the internet, and thanks for stopping by!
        </p>
        <section id="social-media">
          <ul class="flex gap-4">
            <li>
              <a href="#">
                <img src=${logoX} alt="Logo X" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src=${logoGithub} alt="Logo Github" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src=${logoLinkedin} alt="Logo Linkedin" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src=${logoFrontend} alt="Logo Frontend Mentor" />
              </a>
            </li>
          </ul>
        </section>
      </article>
      <section id="latest-posts">
        
      </section>
    </main>
    <footer class="bg-amber-800">
      <p>© 2023 My Blog</p>
    </footer>
  </div>
`

menuBtn(document.querySelector('#menu'),document.querySelector('#nav-mobile'));