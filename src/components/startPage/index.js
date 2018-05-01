import React, {Component} from 'React';
import {Link} from 'react-router-dom';


class Start extends Component {
	render() {
		return (
			<div className="container">
				<img src="./img/underground.png" width="300"/>
				<p>What Would You Like to Find Out About TfL?</p>
				<button>
					<Link to="/nameSearch">Next</Link>
				</button>
			</div>
		)
	}
}

export default Start;	