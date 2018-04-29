import React, {Component} from 'React';
import {Link} from 'react-router-dom';


class NameSearch extends Component {
	render() {
		return (
			<div>
				This is the Name Search page!
				<button>
					<Link to="/">
					Go to Start page
					</Link>
				</button>
			</div>
		)
	}
}

export default NameSearch;	