// Tracks the client's mouse movement and follows it with an 'X'
// displayed on the page. The color of the 'X' will also be changed
// if specific keys are pressed.

document.addEventListener('DOMContentLoaded', () => {
  document.onmousemove = trackX;

  const xDiv1 = document.querySelector('.horizontal');
  const xDiv2 = document.querySelector('.vertical');

  const setColors = ({ key }) => {
    const colorForKey = {
      b: 'blue',
      g: 'green',
      r: 'red',
    };

    xDiv1.style.backgroundColor = colorForKey[key];
    xDiv2.style.backgroundColor = colorForKey[key];
  };

  document.addEventListener('keydown', setColors);
});

function trackX(event) {
  const divX = document.querySelector('div.x');

  const xPixels = String(event.clientX) + 'px';
  const yPixels = String(event.clientY) + 'px';
  divX.style.left = xPixels;
  divX.style.top = yPixels;
}
