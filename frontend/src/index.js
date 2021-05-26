import React from 'react';
import './index.css';
import * as serviceWorker from './serviceWorker';
import App from './components/App/App';
import { store } from './helpers';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import {Router, Route} from 'react-router-dom';
import { history } from './helpers';

ReactDOM.render(
   (
   <Provider store={store}>
      <Router history={history} >
         <Route component={App} />
      </Router>
   </Provider>),
    document.getElementById('root') || document.createElement('div') // for testing purposes
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
