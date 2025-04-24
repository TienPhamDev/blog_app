import './styles.css'
import menu from '../public/images/icon-menu.svg'
import moon from '../public/images/icon-moon.svg'
import logo from '../public/images/image-avatar.jpg'

document.querySelector('#app').innerHTML = `
  <div class="container mx-auto bg-neutral-200 px-[16px] py-[16px]">
    <header class="flex shadow-sm bg-white justify-between items-center p-2 rounded-[12px] mb-[32px]">
      <div id="logo">
        <img src=${logo} alt="Logo" class="size-10 rounded-md"/>
      </div>
      <div class="flex">
        <nav>
          <button id="menu" type="button" class="p-2 rounded">
            <img src=${menu} alt="Menu" />
          </button>
          <ul class="hidden">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#newsletter">Newsletter</a></li>
          </ul>
        </nav>
        <button id="darkmode" type="button" class="bg-neutral-200 size-10 p-2 rounded flex justify-center items-center">
            <img src=${moon} alt="Dark Mode" />    
        </button>
      </div>
    </header>
    <main class="bg-amber-500">
      h2>Welcome to my blog!</h2>
    </main>
    <footer class="bg-amber-800">
      <p>© 2023 My Blog</p>
    </footer>
  </div>
`

