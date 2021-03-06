import axios from 'axios';

const Api = axios.create({
  baseURL: 'https://restcountries.eu/rest/v2/all',
  headers: {
    'Accept': 'application/json',
    'Content-type': 'application/json'
  }
})

export default Api;