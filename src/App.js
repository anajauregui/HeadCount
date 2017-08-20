import React, { Component } from 'react';
import DistrictRepository from './helper';
import kinderData from '../data/kindergartners_in_full_day_program';
import Search from './Search';
import DataContainer from './DataContainer';
import DistrictCompare from './DistrictCompare';
import './App.css';
import ReactCSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

const district = new DistrictRepository(kinderData)

class App extends Component {
  constructor() {
    super();

  this.state = {
    data: district.findAllMatches(),
    compare: [],
    // compareCards: [],
    // isHidden: true
  }

  this.handleChange = this.handleChange.bind(this);
  this.compareDistricts = this.compareDistricts.bind(this);
  this.removeCompare = this.removeCompare.bind(this);
  this.handleReset = this.handleReset.bind(this);
  // this.toggleHidden = this.toggleHidden.bind(this);
}

  // toggleHidden() {
  //   this.setState({
  //     isHidden: !this.state.isHidden
  //   })
  // }

  handleChange(e) {
    this.setState({
      data: district.findAllMatches(e.target.value)
    })
  }

  handleReset(e) {
    this.setState ({
      compare: []
    })
  }

  compareDistricts(location) {
    // console.log(e.target);
    const compareItem = district.findByName(location);
    const compareData = this.state.compare;
    const index = compareData.indexOf(compareItem);

    if(compareData.includes(compareItem)){
      compareData.splice(index, 1)
      this.setState({
        compare: compareData,
        // compareCards: compareData
      })
    }
    else if(compareData.length === 2){
      compareData.pop()
        this.setState({
          compare: compareData,
          // compareCards: compareData
        })
        compareData.push(compareItem)
        this.setState({
          compare: compareData,
          // compareCards: compareData
        })
    }
    else {
      this.state.compare.push(compareItem)
      this.setState({
        compare: compareData,
        // compareCards: compareData
      })
    }

  }

  removeCompare(location) {
    const choice = district.findByName(location)
    const compareData = this.state.compare
    const index = this.state.compare.indexOf(choice)
    compareData.splice(index, 1)
    this.setState({
      compare: compareData
    })
  }

  render() {
    console.log('state', this.state.compare);
    return (
      <div>
        <Search handleChange={ this.handleChange } />
        <ReactCSSTransitionGroup transitionName='card' transitionEnterTimeout={700} transitionLeaveTimeout={700}>
          <DataContainer schoolInfo={ this.state.compare } compareDistricts={ this.removeCompare } />
        </ReactCSSTransitionGroup>
        {
          (this.state.compare).length === 2 && <DistrictCompare comparisonData={ this.state.compare } handleReset={ this.handleReset }/>
        }
        <DataContainer schoolInfo={ this.state.data } compareDistricts={ this.compareDistricts }/>
      </div>
    )
  }
}

export default App;
