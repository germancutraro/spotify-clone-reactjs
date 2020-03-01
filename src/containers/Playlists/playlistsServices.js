import api from '../../utils/api';

export const getUserPlaylists = () =>
  api('https://api.spotify.com/v1/me/playlists');

export const getPlaylist = id =>
  api(
    `https://api.spotify.com/v1/playlists/${id}?type=track%2Cepisode&market=from_token`
  );

export const getPlaylistTracks = id =>
  api(`https://api.spotify.com/v1/playlists/${id}/tracks`);

export const getUserTracks = () => api(`https://api.spotify.com/v1/me/tracks`);
