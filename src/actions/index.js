import axios from 'axios';
import { ROOT_URL, API_KEY } from '../constants/auth';

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

	// e.g. https://pixabay.com/api/?key=3447327-4862a38728b3e10a8a5e52323&q=yellow+flowers&image_type=photo
	//var searchTerm = 'yellow+flowers';
	var imageType = 'photo';
	var requestUrl = ROOT_URL + '/?key=' + API_KEY + '&q=' + searchTerm + '&image_type=' + imageType;
	const request = axios.get(requestUrl);

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

