import axios from 'axios';

export default function getUsers() {
  return axios.get('/users.json').then((response) => response.data);
}
