import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux'
// import {createStore,applyMiddleware} from 'redux'
// import rootReducer from './Reducers/rootReducer';
// import thunk from "redux-thunk"
import store from './Store/store'





ReactDOM.render(<Provider store= {store}><App/></Provider>, document.getElementById('root'))




// ReactDOM.render(<New/>, document.getElementById('root'));
// ReactDOM.render(<RenderProps/>, document.getElementById('root'));

serviceWorker.unregister();
