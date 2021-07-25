const BASE_URL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';

export function parseId(result = '') {
  const startIndex = 'Game with ID: '.length - 1;
  const endIndex = result.lastIndexOf(' ');
  return result.substring(startIndex, endIndex + 1);
}

export async function post(URL, body) {
  const response = await fetch(`${BASE_URL}${URL}`, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });

  return response.json();
}

export async function get(URL) {
  const response = await fetch(`${BASE_URL}${URL}`);
  return response.json();
}