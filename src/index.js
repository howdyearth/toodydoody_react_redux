import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import todoAppReducer from './reducers'
import './index.css';
import App from './App';
import { loadState, saveState } from './utils/localStorage'
import registerServiceWorker from './registerServiceWorker';


const persistedState = loadState();
const store = createStore(
  todoAppReducer,
  persistedState
);

store.subscribe(() => {
  saveState(store.getState());
})

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
