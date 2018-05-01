import { SEARCH_TERM_SELECTED } from '../actions/index';

export default function (state = null, action) {
	
	switch (action.type) {
		case 'SEARCH_TERM_SELECTED':
			return action.payload;
	}
	return state;
}