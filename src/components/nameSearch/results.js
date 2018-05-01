import React from 'react';
import { connect } from 'react-redux';
import { setSearchTerm, selectResult } from '../../actions/index';
import List from './List';

class Results extends React.Component {

	render() {
		const {items, setSearchTerm} = this.props
	
		return (
			<div>
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


