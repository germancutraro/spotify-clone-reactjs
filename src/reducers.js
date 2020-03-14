import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// reducers
import authReducer from './containers/Auth/authReducer';
import dashboardReducer from './containers/Dashboard/dashboardReducer';
import userReducer from './containers/User/userReducer';
import playlistsReducer from './containers/Playlists/playlistsReducer';
import searchReducer from './containers/Search/searchReducer';
import libraryReducer from './containers/Library/libraryReducer';
import browseReducer from './containers/Browse/browseReducer';
import artistReducer from './containers/Artist/artistReducer';
import albumReducer from './containers/Album/albumReducer';
import trackReducer from './containers/Track/trackReducer';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['user']
};

const playlistsPersistConfig = {
  key: 'playlists',
  storage,
  whitelist: ['list']
};

const trackPersistConfig = {
  key: 'track',
  storage,
  whitelist: ['song']
};

export default history =>
  combineReducers({
    auth: persistReducer(authPersistConfig, authReducer),
    dashboard: dashboardReducer,
    user: userReducer,
    playlists: persistReducer(playlistsPersistConfig, playlistsReducer),
    search: searchReducer,
    browse: browseReducer,
    library: libraryReducer,
    artist: artistReducer,
    album: albumReducer,
    track: persistReducer(trackPersistConfig, trackReducer),
    router: connectRouter(history)
  });
