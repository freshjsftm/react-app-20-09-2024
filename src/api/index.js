import axios from 'axios';

const httpClient = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});

export const getUsers = () => httpClient.get('/users');

//export const getProducts = () => httpClient.get('/products');
