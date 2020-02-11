import { combineReducers } from 'redux';
// import { connectRouter } from 'connected-react-router';
// import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

// reducers

// const authPersistConfig = {
//   key: 'auth',
//   storage,
//   blacklist: ['error', 'loading', 'success']
// };

export default history =>
  combineReducers({
    // auth: persistReducer(authPersistConfig, authReducer),
  });
