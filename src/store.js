import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';
import { createBrowserHistory } from 'history';
import { persistStore } from 'redux-persist';
import createRootReducer from './reducers';

export const history = createBrowserHistory();
export const sagaMiddleware = createSagaMiddleware();

const initialState = {};
const enhancers = [];
const middleware = [sagaMiddleware, routerMiddleware(history)];

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
  }
}

const composedEnhancers = compose(applyMiddleware(...middleware), ...enhancers);

export default () => {
  let store = createStore(
    createRootReducer(history),
    initialState,
    composedEnhancers
  );
  let persistor = persistStore(store);
  return { store, persistor };
};
