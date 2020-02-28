import api from '../../utils/api';

export const getBrowse = () =>
  api(
    'https://api.spotify.com/v1/views/browse-page-cx-test?timestamp=2020-02-28T01%3A47%3A34.288Z&platform=web&content_limit=20&limit=50&country=AR&locale=en',
    'GET',
    {
      Authorization:
        'Bearer BQCta8EQ-2ETBMpmZtxk10y7O8t7bFDueOesmt5IIWrl8V5nr2wbbXDH3No-_L-i8gFr9Cxz3Q3RczbemCQoosyEXAh18cmpkyxADBjlBg0hWHDiAVeFBmlMxRhx26yNdmpuTv2fUCbeOezoWnw805-e8-3SxsIgLmjoQ4yK7wf04hi_Cp_cGdKPWBirqhvDHv-LCRjKNtZS3c23WJkwbcpzS-dR6Bq-sW06bs-jKFq6FI9AOjNrb9rw9rr29-grUCTW5tIT6jLPp0QE5568GBMr93ICA_x_olFobUkA9dM","accessTokenExpirationTimestampMs'
    }
  );

//https://open.spotify.com/access_token?reason=transport&productType=web_player
