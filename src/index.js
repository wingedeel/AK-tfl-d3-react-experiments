import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Start from './components/start';
import NameSearch from './components/nameSearch';


ReactDOM.render(
    <BrowserRouter>
    	<div>
    		<Switch>
    			<Route path='/nameSearch' component={NameSearch}/>
    			<Route path='/' component={Start}/>

    		</Switch>
    	</div>
    </BrowserRouter>
  , document.querySelector('.container'));
