import * as API from './api.js';
import './style.css';

const GAME_NAME = 'usman';

function displayScores(scores = []) {
  const ul = document.getElementById('scores');
  ul.innerHTML = '';

  scores.forEach(({ user, score }) => {
    const li = document.createElement('li');
    li.innerText = `${user}: ${score}`;
    ul.appendChild(li);
  });
}

window.addEventListener('load', async () => {
  const id = await API.createGame(GAME_NAME);
  const refreshButton = document.getElementById('refresh-button');
  const form = document.getElementById('add-score');

  const refreshScores = async () => {
    const scores = await API.fetchScores(id);
    displayScores(scores);
  };

  refreshButton.addEventListener('click', refreshScores);

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const nameInput = form.elements[0];
    const scoreInput = form.elements[1];

    const data = {
      user: nameInput.value,
      score: scoreInput.value,
    };

    await API.submitScore(id, data);
    await refreshScores();

    form.reset();
  });
});
