import { parseId, post, get } from './util.js';

export const createGame = async (name) => {
  const { result } = await post('games', { name });
  const id = parseId(result);
  return id;
};

export const fetchScores = async (id) => {
  const { result } = await get(`games/${id}/scores/`);
  return result;
};

export const submitScore = async (id, data) => {
  const { result } = await post(`games/${id}/scores/`, data);
  return result;
};
