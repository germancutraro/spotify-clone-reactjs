import api from '../../utils/api';

export const getArtist = artistId =>
  api(`https://api.spotify.com/v1/artists/${artistId}`);

export const getArtistTracks = artistId =>
  api(`https://api.spotify.com/v1/artists/${artistId}/top-tracks?country=ES`);

export const getArtistAlbums = artistId =>
  api(
    `https://api.spotify.com/v1/artists/${artistId}/albums?include_groups=single%2Cappears_on&market=ES&limit=50`
  );

export const getArtistsRelated = artistId =>
  api(`https://api.spotify.com/v1/artists/${artistId}/related-artists`);

export const isUserFollowing = artistId =>
  api(
    `https://api.spotify.com/v1/me/following/contains?type=artist&ids=${artistId}`
  );

export const followUnfollow = (artistId, action = 'follow') =>
  api(
    `https://api.spotify.com/v1/me/following?type=artist&ids=${artistId}`,
    action === 'follow' ? 'PUT' : 'DELETE'
  );
