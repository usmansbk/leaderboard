import * as API from './api.js';
import './style.css';

const GAME_NAME = 'usman';

window.addEventListener('load', async () => {
  try {
    const id = await API.createGame(GAME_NAME);
    console.log(await API.fetchScores(id));
  } catch (error) {
    // Report error
  }
});
