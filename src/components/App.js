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
      allData:[], 
      chartData:[],  
      searchCriteria:'bank'
    };

    this.requestData = this.requestData.bind(this);
    this.parseData = this.parseData.bind(this);

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }


  componentDidMount() {
  }

  componentDidUpdate() {
  }

  requestData() {
    const url = 'https://api.tfl.gov.uk/Stoppoint/search/' + this.state.searchCriteria;
    const params =  {
    };
    axios.get( url, {params})
      .then(response => {
        this.setState({allData:response.data})
        this.parseData(response);
      })
  }

  parseData() {
    let data = this.state.allData;
    let chartData =[];
    for (var i=0; i<data.total; i++) {
        let obj = {};
        let item = data.matches[i];
        obj['name'] = item.name;
        chartData.push(item.name);
    }
    this.setState( {chartData});
    console.log('chartData ', chartData); 
  }


  onFormSubmit(event){
    event.preventDefault();
    this.requestData();
  }
  

  onInputChange(event){
    this.setState( { searchCriteria:event.target.value});
  }

  render() {
    console.log('render -----------------');
    // let outputComponent = <SimpleComponent data={this.state.chartData} colorLegend={colorLegend} />
    let outputComponent = <List data={this.state.chartData}/>
     return (
      	<div className="app">
          <h1>Which trains will arrive on this platform?</h1>
          <h4>Powered by data from the TfL Unified API</h4>
          <form className="form" onSubmit={this.onFormSubmit}>
            <span>Enter a station name to search for</span>
            <input
              placeholder="Enter number here"
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
