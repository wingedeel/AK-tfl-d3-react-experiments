import React from 'react';
import { connect } from 'react-redux';
import { setSearchTerm, selectResult } from '../../actions/index';
import List from './List';

class Results extends React.Component {

	render() {
		const {items, setSearchTerm} = this.props
		const displayText = items.length>0 ? 'Here are a list of places that have that name in!' : '';
	
		return (
			<div>
				<p>{displayText}</p>
				<List data={items}/>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return { 
		items: state.items.all ,
		searchTerm: state.searchTerm
	};
}

export default connect ( mapStateToProps, {selectResult, setSearchTerm}) (Results);


