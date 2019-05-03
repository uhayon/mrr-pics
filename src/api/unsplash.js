import axios from 'axios';

const axiosClient = axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 38baa257550855f54e4331d81d0de21da9ffc8453bda9e50d1f083b750a16340'
  }
});

export const findImages = async term => {
  const response = await axiosClient.get('/search/photos', {
    params: { query: term }
  });

  return response.data.results;
}