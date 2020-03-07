import api from '../../utils/api';

export const getRecentlyPlayed = () =>
  api(
    'https://api.spotify.com/v1/me/player/recently-played?type=track&limit=5'
  );

export const getRecommendations = (artistsIds, tracksIds, genre) =>
  api(
    `https://api.spotify.com/v1/recommendations?limit=5&market=ES&seed_artists=1QOmebWGB6FdFtW7Bo3F0W&seed_genres=${genre}&seed_tracks=3oqWr0jDWNXxWufNogGREp`
  );

export const getFeaturedPlaylists = () =>
  api(`https://api.spotify.com/v1/browse/featured-playlists?limit=5`);

export const getNewReleases = () =>
  api(`https://api.spotify.com/v1/browse/new-releases?limit=5`);
