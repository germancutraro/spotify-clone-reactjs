import api from '../../utils/api';

export const getTopArtists = () =>
  api('https://api.spotify.com/v1/me/top/artists?limit=10');

export const getAlbums = () =>
  api('https://api.spotify.com/v1/me/albums?limit=10');
