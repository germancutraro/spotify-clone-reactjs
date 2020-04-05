import api from '../../utils/api';

export const getAlbum = albumId =>
  api(`https://api.spotify.com/v1/albums/${albumId}`);

export const saveAlbum = albumId =>
  api(`https://api.spotify.com/v1/me/albums?ids=${albumId}`, 'PUT');

export const removeAlbum = albumId =>
  api(`https://api.spotify.com/v1/me/albums?ids=${albumId}`, 'DELETE');
