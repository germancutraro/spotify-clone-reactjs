import api from '../../utils/api';

export const getSearch = query =>
  api(`https://api.spotify.com/v1/search?q=${query}&type=track%2Cartist`);

export const getArtistAlbums = artistId =>
  api(`https://api.spotify.com/v1/artists/${artistId}/albums`);

export const getArtistSongs = artistId =>
  api(`https://api.spotify.com/v1/artists/${artistId}/top-tracks?country=ES`);

export const getRelatedArtists = artistId =>
  api(`https://api.spotify.com/v1/artists/${artistId}/related-artists`);
