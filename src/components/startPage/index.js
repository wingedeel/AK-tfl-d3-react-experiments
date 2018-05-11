import React, {Component} from 'React';
import {Link} from 'react-router-dom';
import posed, { PoseGroup } from 'react-pose'


class Start extends Component {

	render() {
		const config = {
		  visible: { opacity: 1 },
		  hidden: { opacity: 0 }
		}
		const Box = posed.div(config)

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