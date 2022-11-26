/* <div class="widget">
<p>Background color: <span class="color">-</span></p>
<button type="button" class="change-color">Change color</button>
</div> */

const butChangeColorEl = document.querySelector('.change-color');
const valueColorEl = document.querySelector('.color');
const bodyEl = document.querySelector('body');


butChangeColorEl.addEventListener('click',getRandomHexColor)

function getRandomHexColor() {
  const colorRandom = '#' + Math.floor(Math.random() * 16777215).toString(16)
  valueColorEl.textContent = colorRandom;
  bodyEl.style.backgroundColor = colorRandom;
  return colorRandom ;
}
console.log(getRandomHexColor())
  