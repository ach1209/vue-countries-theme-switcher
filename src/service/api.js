import axios from 'axios';

const Api = axios.create({
  baseURL: 'https://restcountries.com/v2/all',
  headers: {
    'Accept': 'application/json',
    'Content-type': 'application/json'
  }
})

export default Api;