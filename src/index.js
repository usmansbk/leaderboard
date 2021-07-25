import './style.css';

window.addEventListener('load', () => {
  const ul = document.getElementById('scores');
  new Array(10).fill(0).forEach((score, index) => {
    const li = document.createElement('li');
    li.innerText = index;
    ul.appendChild(li);
  });
});