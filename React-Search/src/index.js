/*eslint-disable*/
import 'babel-polyfill';
import 'url-search-params-polyfill';
import 'whatwg-fetch';
import React from 'react';
import ReactDOM from 'react-dom';
import RouterComponent from './router';
import "./assets/css/common/public.css";
import './assets/js/conf/global.js';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducers from './reducers';
let store=createStore(reducers);
class Index extends React.Component{
    render(){
        return(
            <React.Fragment>
                <Provider store={store}>
                    <RouterComponent />
                </Provider>
            </React.Fragment>
        )
    }
}

ReactDOM.render(<Index />, document.getElementById('root'));