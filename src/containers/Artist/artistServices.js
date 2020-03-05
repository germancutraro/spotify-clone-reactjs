import api from '../../utils/api';

export const getArtist = artistId =>
  api(`	https://api.spotify.com/v1/artists/${artistId}`);
