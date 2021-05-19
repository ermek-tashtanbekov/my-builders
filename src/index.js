import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import App from './App';
import thunk from 'redux-thunk';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider  } from 'react-redux';
import builder from './store/reducers/builder' 
import orders from './store/reducers/orders'
import auth from './store/reducers/auth'

const rootReducer  = combineReducers({ builder, orders, auth });
const store = createStore(rootReducer,applyMiddleware(thunk) )
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>


  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
