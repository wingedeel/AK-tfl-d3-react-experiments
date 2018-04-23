/* ---------------------------------------
Specify a hardcoded location
Returns 227 bike points
Default, initial display shows 10 points.
User can change the number of bike points displayed.
--------------------------------------- */

import React, { Component } from 'react';
import List from './List';
import axios from 'axios';

const appID = '45424d2e';
const appKey = '0c06da185829a08ba97d76499acd69a6';

const colorLegend = 
[
 // reds from dark to light
 "#67000d", "#a50f15", "#cb181d", "#ef3b2c", "#fb6a4a", "#fc9272", "#fcbba1", "#fee0d2",
 //neutral grey
 "#f0f0f0",
 // blues from light to dark
 "#deebf7", "#c6dbef", "#9ecae1", "#6baed6", "#4292c6", "#2171b5", '#08519c', "#08306b"
];


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      responseData:[], 
      chartData:[],
      searchType: 'tube-lines',  
      searchCriteria:'kings cross'
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }


  componentDidMount() {
  }

  componentDidUpdate() {
  }

  
  requestData() {
    if (this.state.searchType == 'name'){this.requestNameSearch();}
    if (this.state.searchType == 'tube-lines'){this.requestTubeLines();}
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
        obj['name'] = item.name;
        obj['modes'] = item.modes;
        chartData.push(obj);
    }
    this.setState( {chartData});
    console.log('chartData ', chartData); 
  }

  //------------------------------------------//
  /* Request a station and get all its tube lines
  Euston has an id of 940GZZLUEUS
  Kings Cross is HUBKGX
  https://api.tfl.gov.uk/StopPoint/940GZZLUEUS?includeCrowdingData=false
  Look for modeName with a value of 'tube' OR
  $type of "Tfl.Api.Presentation.Entities.LineModeGroup"

  {
      "$type": "Tfl.Api.Presentation.Entities.LineModeGroup, Tfl.Api.Presentation.Entities",
      "modeName": "tube",
      "lineIdentifier": [
        "northern",
        "victoria"
      ]
    },

  */
  requestTubeLines() {
    const url = 'https://api.tfl.gov.uk/StopPoint/HUBKGX?includeCrowdingData=false';
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
    event.preventDefault();
    this.requestData();
  }
  

  onInputChange(event){
    this.setState( { searchCriteria:event.target.value});
  }

  render() {
    // let outputComponent = <SimpleComponent data={this.state.chartData} colorLegend={colorLegend} />
    let outputComponent = <List data={this.state.chartData}/>
     return (
      	<div className="app">
          <h1>Transport for London info</h1>
          <h4>Powered by data from the TfL Unified API</h4>
           <p>Display all the stations and bus stops that contain the following name:</p>
          <form className="form" onSubmit={this.onFormSubmit}>
            <span>Enter a name to search for</span>
            <input
              placeholder="Enter name here"
              value={this.state.searchCriteria}
              onChange={this.onInputChange}/>
            <span>
              <button type="submit">Submit</button>
            </span>

          </form>
      		{outputComponent}
      </div>
      )
  }
}

export default App;
