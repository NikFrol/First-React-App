import React from 'react';
import ReactDOM from 'react-dom';

import { createStore} from 'redux';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import App from './App';
import rootReducer from './store/counter';

import './index.module.css';


const store = new createStore(rootReducer);



ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
