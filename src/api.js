import { parseId, post, get } from './util.js';

export async function createGame(name) {
  const { result } = await post('games', { name });
  const id = parseId(result);
  return id;
}

export async function fetchScores(id) {
  const { result } = await get(`games/${id}/scores/`);
  return result;
}

export async function submitScore(id, data) {
  const { result } = await post(`games/${id}/scores/`, data);
  return result;
}