import { combineReducers } from 'redux';

import ResultsReducer from './reducer-results';
import SearchTermReducer from './reducer-search-term';

const rootReducer = combineReducers({
	items: ResultsReducer,
	searchTerm: SearchTermReducer
});

export default rootReducer;
