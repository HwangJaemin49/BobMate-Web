import axios from 'axios';

const makeAxiosInstance = () => {
  const Authorization = localStorage.getItem('accessToken');
  return axios.create({
    baseURL: '/api/v1/',
    headers: {
      'Content-Type': 'application/json',
      Authorization,
    },
    validateStatus: (status) => {
      return status >= 200 && status < 400;
    },
    withCredentials: true,
  });
};

export default makeAxiosInstance;
