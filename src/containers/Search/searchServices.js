import api from '../../utils/api';

export const getSearch = query =>
  api(
    `https://spclient.wg.spotify.com/searchview/km/v4/search/${query}?entityVersion=2&limit=10&imageSize=large&catalogue=&country=AR&username=k4wp05wgc21yzac4s9axvtz44&locale=en&platform=web`
  );

//api(`https://api.spotify.com/v1/search?q=${query}&type=track%2Cartist`);
