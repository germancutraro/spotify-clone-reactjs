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

export const getRandomTracks = () =>
  api(
    `https://api.spotify.com/v1/tracks?ids=3n3Ppam7vgaVa1iaRUc9Lp%2C3twNvmDtFQtAd5gMKedhLD,7ouMYWpwJ422jRcDASZB7P,4VqPOruhp5EdPBeR92t6lQ,2takcwOaAZWiXQijPHIx7B`
  );

export const createPlaylist = (userId, name = 'New Playlist') =>
  api(
    `https://api.spotify.com/v1/users/${userId}/playlists`,
    'POST',
    {},
    {
      name,
      public: true,
    }
  );

export const addTrackToPlaylist = (playlistId, tracksUris, method = 'POST') =>
  api(
    `https://api.spotify.com/v1/playlists/${playlistId}/tracks?uris=${tracksUris}`,
    method
  );

export const checkUserFollowPlaylist = (playlistId, userId) =>
  api(
    `https://api.spotify.com/v1/playlists/${playlistId}/followers/contains?ids=${userId}`
  );

export const followUnfollowPlaylist = (playlistId, action) =>
  api(
    `https://api.spotify.com/v1/playlists/${playlistId}/followers`,
    action === 'follow' ? 'PUT' : 'DELETE'
  );

export const likeSong = (songId, action) =>
  api(
    `https://api.spotify.com/v1/me/tracks?ids=${songId}`,
    action === 'follow' ? 'PUT' : 'DELETE'
  );

export const getUserSongs = () => api(`https://api.spotify.com/v1/me/tracks`);
