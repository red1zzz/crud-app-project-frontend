import axios from 'axios';

const API_URL = 'http://localhost:5000/items'; 

export const getItem = (id) => {
  return axios.get(`${API_URL}/${id}`);
};

export const deleteItem = (id) => {
  return axios.delete(`${API_URL}/${id}`);
};

