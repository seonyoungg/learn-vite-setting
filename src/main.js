import './style.css';

document.querySelector('#app').innerHTML = `
  <div>
    <h1 class="text-red-600 text-3xl">Hello Vite!</h1>
    <div class="card bg-amber-300 p-4 mb-4">
      <button id="counter" type="button">버튼</button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'))

