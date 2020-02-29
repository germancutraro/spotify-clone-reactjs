import api from '../../utils/api';

export const getSearch = query =>
  api(`https://api.spotify.com/v1/search?q=${query}&type=track%2Cartist`);
