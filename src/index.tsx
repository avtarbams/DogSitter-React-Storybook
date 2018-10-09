import { connectRouter, routerMiddleware } from 'connected-react-router'
import { createBrowserHistory } from 'history'
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { applyMiddleware, compose, createStore } from 'redux'
import thunk from 'redux-thunk';
import App from './App';
import './index.css';
import rootReducer from './Reducers';
import registerServiceWorker from './utils/registerServiceWorker';

const history = createBrowserHistory()

const composeEnhancer: typeof compose = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
  connectRouter(history)(rootReducer),
  composeEnhancer(
    applyMiddleware(thunk,
      routerMiddleware(history),
    ),
  ),
)


ReactDOM.render(
  <Provider store={store}>
        <App history={history} />
      </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
