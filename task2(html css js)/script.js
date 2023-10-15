const btn = document.querySelector('#btn')

const screenWidth = window.screen.width;
const screenHeight = window.screen.height;

btn.addEventListener('click', () => {
  alert(`Размеры вашего экрана - Ширина: ${screenWidth} x Высота: ${screenHeight}`)
  })
