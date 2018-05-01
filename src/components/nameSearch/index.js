import React, {Component} from 'React';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setSearchTerm, fetchResults } from '../../actions/index';

import List from './List';
import Results from './results';


class NameSearch extends Component {

  constructor(props) {
    super(props);

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onButtonSelect = this.onButtonSelect.bind(this);
  }


  onFormSubmit(event){
    event.preventDefault();
    this.props.fetchResults(this.props.searchTerm);
  }
  

  onInputChange(event){
    this.props.setSearchTerm(event.target.value);
  }

  onButtonSelect(){
  	console.log('button select')
  }

  render() {
      return (
      	<div className="name-search-container">
          <form className="form" onSubmit={this.onFormSubmit}>
            <span>Enter a name to search for</span>
            <input
              placeholder="Enter name here"
              value={this.props.searchTerm}
              onChange={this.onInputChange}/>
            <span>
              <button type="submit">Submit</button>
            </span>
            <Results/>
          </form>
      		
      </div>
      )
  }
}

function mapStateToProps( state ) {
  return {
    searchTerm: state.searchTerm
  }
}

// connect() will automatically bind dispatch to your actions 
// if they are passed in as an object of function names.
export default connect (mapStateToProps, {fetchResults, setSearchTerm} )(NameSearch);

