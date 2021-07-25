import utils from './util.js';

const BASE_URL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';

export async function createGame(name) {
  const response = await fetch(`${BASE_URL}games`, {
    method: 'POST',
    body: JSON.stringify({
      name,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  const { result } = await response.json();
  const id = utils.getId(result);
  return id;
}

export function fetchScores() {}