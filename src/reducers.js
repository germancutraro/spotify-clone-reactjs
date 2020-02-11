import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// reducers
import authReducer from './containers/Auth/authReducer';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['user']
};

export default history =>
  combineReducers({
    auth: persistReducer(authPersistConfig, authReducer),
    router: connectRouter(history)
  });
