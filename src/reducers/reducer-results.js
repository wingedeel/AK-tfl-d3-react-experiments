import { FETCH_SEARCH_RESULTS } from '../actions/index';

const INTIAL_STATE = { all: [] };

export default function(state=INTIAL_STATE, action){

	switch(action.type){

		case FETCH_SEARCH_RESULTS:

			if (action.payload != undefined) {
				let data = action.payload.data;
				let chartData =[];
			    for (var i=0; i<data.total; i++) {
			        let obj = {};
			        let item = data.matches[i];
			        obj['name'] = item.name;
			        obj['modes'] = item.modes;
			        chartData.push(obj);
			    }
				return { ...state, all: chartData};
			}
				
		default:
			return state;
	}
}
