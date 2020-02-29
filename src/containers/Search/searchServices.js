import api from '../../utils/api';

export const getSearch = () =>
  api(
    'https://api.spotify.com/v1/views/browse-page-cx-test?timestamp=2020-02-28T01%3A47%3A34.288Z&platform=web&content_limit=20&limit=50&country=AR&locale=en'
  );
