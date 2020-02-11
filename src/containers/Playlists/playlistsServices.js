import api from '../../utils/api';

export const getUserPlaylists = () =>
  api('https://api.spotify.com/v1/me/playlists');

export const getPlaylistTracks = id =>
  api(`	https://api.spotify.com/v1/playlists/${id}/tracks`);
