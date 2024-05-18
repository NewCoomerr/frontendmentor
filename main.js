const primaryHeader = document.querySelector('.primary-header');
const navToggle = document.querySelector('.mobile-nav-toggle');
const primaryNav = document.querySelector('.primary-navigation');



navToggle.addEventListener('click',()=>{
    primaryNav.hasAttribute('data-visible')  
    ? navToggle.setAttribute('aria-expanded', false)
    : navToggle.setAttribute('aria-expanded', true) 
    primaryNav.toggleAttribute('data-visible');
    primaryHeader.toggleAttribute('data-overlay');
})

const slider = new A11YSlider(document.querySelector('.slider'), {
    adaptiveHeight: false,
    dots: true,
    centerMode: true,
    arrows: false,
    responsive: {
        768: {
            dots: false,
          },
          960: {
            dots: false,
          },
          1280: {
            dots: false,
           
          },
        480: {
          dots: false,
         
        }
      }
  });


















// import './style.css'
// import javascriptLogo from './javascript.svg'
// import viteLogo from '/vite.svg'
// import { setupCounter } from './counter.js'

// document.querySelector('#app').innerHTML = `
//   <div>
//     <a href="https://vitejs.dev" target="_blank">
//       <img src="${viteLogo}" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
//       <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
//     </a>
//     <h1>Hello Vite!</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite logo to learn more
//     </p>
//   </div>
// `

// setupCounter(document.querySelector('#counter'))
