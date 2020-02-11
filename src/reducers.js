import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// reducers
import authReducer from './containers/Auth/authReducer';
import playlistsReducer from './containers/Playlists/playlistsReducer';

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

export default history =>
  combineReducers({
    auth: persistReducer(authPersistConfig, authReducer),
    playlists: persistReducer(playlistsPersistConfig, playlistsReducer),
    router: connectRouter(history)
  });
