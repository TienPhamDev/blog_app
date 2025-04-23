import './output.css'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    <h1 class="text-xl text-red-500">Hello World</h1>
  </div>
`

setupCounter(document.querySelector('#counter'))
