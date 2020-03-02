import api from '../../utils/api';

export const getUser = userId =>
  api(`https://api.spotify.com/v1/users/${userId}`);

export const getUserPlaylists = userId =>
  api(`https://api.spotify.com/v1/users/${userId}/playlists`);
