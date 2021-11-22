import axios from 'axios';
const baseUrl = 'https://jsonplaceholder.typicode.com/users';

async function getAll() {
  return await axios.get(baseUrl).then(response => response.data);
}

const functions = { getAll };

export default functions;
