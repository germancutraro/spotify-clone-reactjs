import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// reducers
import authReducer from './containers/Auth/authReducer';
import playlistsReducer from './containers/Playlists/playlistsReducer';
import searchReducer from './containers/Search/searchReducer';
import libraryReducer from './containers/Library/libraryReducer';
import browseReducer from './containers/Browse/browseReducer';

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
    search: searchReducer,
    browse: browseReducer,
    library: libraryReducer,
    router: connectRouter(history)
  });
