import { FETCH_SEARCH_RESULTS } from '../actions/index';

const INTIAL_STATE = { all: [] };

export default function(state=INTIAL_STATE, action){

	switch(action.type){

		case FETCH_SEARCH_RESULTS:
			if (action.payload != undefined) {
				return { ...state, all: action.payload.data.hits};
			}
				
		default:
			return state;
	}
}