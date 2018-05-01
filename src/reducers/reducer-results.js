import { FETCH_SEARCH_RESULTS } from '../actions/index';

const INTIAL_STATE = { all: [] };

export default function(state=INTIAL_STATE, action){

	switch(action.type){

		case FETCH_SEARCH_RESULTS:

			if (action.payload != undefined) {
				const matches = action.payload.data.matches;
				let chartData = matches.map(function(item, index){
					let obj = {};
			    	obj['name'] = item.name;
			    	obj['modes'] = item.modes;
			    	return obj;
				});
				return { ...state, all: chartData};
			}
				
		default:
			return state;
	}
}
