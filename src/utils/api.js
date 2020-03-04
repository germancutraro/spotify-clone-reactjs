import Axios from 'axios';

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
