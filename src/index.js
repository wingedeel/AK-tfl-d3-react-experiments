import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';

import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);


import { BrowserRouter, Route, Switch } from 'react-router-dom';

import StartPage from './components/startPage';
import NameSearch from './components/nameSearch';


ReactDOM.render(
	<Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
    	<div>
    		<Switch>
    			<Route path='/nameSearch' component={NameSearch}/>
    			<Route path='/' component={StartPage}/>

    		</Switch>
    	</div>
    </BrowserRouter>
    </Provider>
  , document.querySelector('.container'));
