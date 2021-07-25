import './style.css';

window.addEventListener('load', () => {
  const ul = document.getElementById('scores');
  new Array(10).fill(0).forEach((_, index) => {
    const li = document.createElement('li');
    li.innerText = `Name: ${index}`;
    ul.appendChild(li);
  });
});