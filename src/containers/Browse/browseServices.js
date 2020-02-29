import api from '../../utils/api';

export const getBrowse = () =>
  api('https://api.spotify.com/v1/browse/categories');

export const getReleases = () =>
  api('https://api.spotify.com/v1/browse/new-releases?limit=10');
