import api from '../../utils/api';

export const getUser = () => api('https://api.spotify.com/v1/me');
