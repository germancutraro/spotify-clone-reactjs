import Axios from 'axios';
import authorize from './authorize';

Axios.interceptors.response.use(
  function(config) {
    return config;
  },
  async function(error) {
    const status = error.response.data.error.status;

    if (status === 401) authorize();

    return Promise.reject(error);
  }
);

export default async (url, method = 'GET', headers = {}, data = {}) => {
  const res = await Axios({
    url,
    method,
    data,
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
      ...headers
    }
  });
  return res.data;
};
