import api from '../../utils/api';

export const getBrowse = () =>
  api(
    'https://api.spotify.com/v1/views/browse-grid-mobile?content_limit=20&locale=en&platform=web&country=AR&timestamp=2020-02-27T13:52:58.55&types=track%2Calbum%2Cplaylist%2Cplaylist_v2%2Cartist%2Ccollection_artist%2Ccollection_album&limit=20&offset=40'
  );
