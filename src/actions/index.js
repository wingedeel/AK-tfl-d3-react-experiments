import axios from 'axios';
import { APP_ID, APP_KEY } from '../constants/auth';

export const FETCH_SEARCH_RESULTS = 'FETCH_SEARCH_RESULTS';
export const SEARCH_TERM_SELECTED = 'SEARCH_TERM_SELECTED';
export const ITEM_SELECTED = 'ITEM_SELECTED';

export function setSearchTerm(searchTerm) {
	return {
		type: 'SEARCH_TERM_SELECTED',
		payload: searchTerm
	}
}

export function fetchResults(searchTerm) {

 	const requestUrl = 'https://api.tfl.gov.uk/Stoppoint/search/' + searchTerm;
 	const params =  {
 		app_id: APP_ID, 
      	app_key: APP_KEY,
    };
    const request = axios.get(requestUrl, {params})
	return {
		type: 'FETCH_SEARCH_RESULTS',
		payload: request
	}
}

export function selectResult(resultItem) {
	return {
		type: 'ITEM_SELECTED',
		payload: resultItem
	}
}

