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
  try {
    const id = await API.createGame(GAME_NAME);

    const refreshButton = document.getElementById('refresh-button');
    refreshButton.addEventListener('click', async () => {
      const scores = await API.fetchScores(id);
      displayScores(scores);
    });
  } catch (error) {
    // Report error
  }
});
