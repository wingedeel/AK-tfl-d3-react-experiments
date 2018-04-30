import React, {Component} from 'React';
import {Link} from 'react-router-dom';
import List from './../List';
import axios from 'axios';


const appID = '45424d2e';
const appKey = '0c06da185829a08ba97d76499acd69a6';


class NameSearch extends Component {

  constructor(props) {
    super(props);

    this.state = {
      responseData:[], 
      chartData:[],
      searchType: 'name',  
      searchCriteria:'walthamstow'
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onButtonSelect = this.onButtonSelect.bind(this);
  }


  componentDidMount() {
  }

  componentDidUpdate() {
  }

  
  requestData() {
    if (this.state.searchType == 'name'){this.requestNameSearch();}
    if (this.state.searchType == 'tube-lines'){this.requestTubeLinesFromStopPoint();}
  }

  //------------------------------------------//
  // Search for Name //
  requestNameSearch() {
    const url = 'https://api.tfl.gov.uk/Stoppoint/search/' + this.state.searchCriteria;
    const params =  {
    };
    axios.get( url, {params})
      .then(response => {
        this.setState({responseData:response.data})
        this.parseNameSearch(response);
      })
  }

  parseNameSearch() {
    let data = this.state.responseData;
    console.log('data ', data);
    let chartData =[];
    for (var i=0; i<data.total; i++) {
        let obj = {};
        let item = data.matches[i];
        // let stopPoint = 'HUBKGX'
        obj['name'] = item.name;
        obj['modes'] = item.modes;
        // obj['tubeLines'] = requestTubeLinesFromStopPoint(stopPoint);
        chartData.push(obj);
    }
    this.setState( {chartData});
    console.log('chartData ', chartData); 
  }

  requestTubeLinesFromStopPoint() {
    let sp='HUBLST';
    const url = 'https://api.tfl.gov.uk/StopPoint/'+sp+'?includeCrowdingData=false';
    const params =  {
    };
    axios.get( url, {params})
      .then(response => {
        this.setState({allData:response.data})
        this.parseTubeLines(response.data);
      })
  }

  parseTubeLines(response) {
    console.log('parseStationList')
    // let data = this.state.responseData;
    console.log('response', response);
    console.log('lineModeGroups', response['lineModeGroups']);
    // Get the tube 'lineModeGroup'
    let tubeLines; 
    for (let i=0; i<response['lineModeGroups'].length; i++){
      let item = response['lineModeGroups'][i];
      if (item['modeName']=='tube'){
          tubeLines=item['lineIdentifier'];
      }
    }
   console.log('TUBE LINES ', tubeLines);
  }


  onFormSubmit(event){
  	console.log('form submit');
    event.preventDefault();
    this.requestData();
  }
  

  onInputChange(event){
    this.setState( { searchCriteria:event.target.value});
  }

  onButtonSelect(){
  	console.log('button select')
  }

  render() {
    // let outputComponent = <SimpleComponent data={this.state.chartData} colorLegend={colorLegend} />
    let outputComponent = <List data={this.state.chartData} callback={this.onButtonSelect}/>
     return (
      	<div className="name-search-container">
          <form className="form" onSubmit={this.onFormSubmit}>
            <span>Enter a name to search for</span>
            <input
              placeholder="Enter name here"
              value={this.state.searchCriteria}
              onChange={this.onInputChange}/>
            <span>
              <button type="submit">Submit</button>
            </span>
            {outputComponent}
          </form>
      		
      </div>
      )
  }
}

export default NameSearch;

