import React, {Component} from 'React';
import {Link} from 'react-router-dom';


class Start extends Component {
	render() {
		return (
			<div>
				This is the Start!
				<button>
					<Link to="/nameSearch">
					Go to Name Search page
					</Link>
				</button>
			</div>
		)
	}
}

export default Start;	