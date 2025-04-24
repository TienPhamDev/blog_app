import './styles.css'
import menuSvg from './images/icon-menu.svg'
import moon from './images/icon-moon.svg'
import logo from './images/image-avatar.jpg'
import menuBtn from './utilities/menuBtn.js'

document.querySelector('#app').innerHTML = `
  <div class="container mx-auto bg-neutral-200 px-[16px] py-[16px]">
    <header class="flex shadow-sm bg-white justify-between items-center p-2 rounded-[12px] mb-[16px]">
      <div id="logo">
        <img src=${logo} alt="Logo" class="size-10 rounded-[12px]"/>
      </div>
      <div class="flex justify-center items-center gap-2">
        <button id="menu" type="button" class="p-2 rounded">
            <img src=${menuSvg} alt="Menu" />
        </button>
        <button id="darkmode" type="button" class="bg-neutral-200 size-10 p-2 rounded-[12px] flex justify-center items-center">
            <img src=${moon} alt="Dark Mode" />    
        </button>
      </div>
    </header>
    <nav class="hidden">
      <ul class=" bg-white shadow-lg rounded-md px-4 text-[18px] tracking-[-0.2px] leading-[150%] text-neutral-600 font-light">
        <li class='border-b-1 border-neutral-200 py-2'><a href="#home">Home</a></li>
        <li class='border-b-1 border-neutral-200 py-2'><a href="#about">Blog</a></li>
        <li class='border-b-1 border-neutral-200 py-2'><a href="#contact">About</a></li>
        <li class='py-2'><a href="#newsletter">Newsletter</a></li>
      </ul>
    </nav>
    <main class="bg-amber-500">
      h2>Welcome to my blog!</h2>
    </main>
    <footer class="bg-amber-800">
      <p>© 2023 My Blog</p>
    </footer>
  </div>
`

menuBtn();