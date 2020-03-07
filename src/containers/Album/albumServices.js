import api from '../../utils/api';

export const getAlbum = albumId =>
  api(`https://api.spotify.com/v1/albums/${albumId}`);
