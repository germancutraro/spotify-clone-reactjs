import Axios from 'axios';

export default async (url, method = 'GET', headers = {}) => {
  const res = await Axios({
    url,
    method,
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
      ...headers
    }
  });
  return res.data;
};
