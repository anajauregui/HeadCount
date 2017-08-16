import React, { Component } from 'react';
import DistrictRepository from './helper';
import kinderData from '../data/kindergartners_in_full_day_program';
import Search from './Search';
import DataContainer from './DataContainer';
import './App.css';

const district = new DistrictRepository(kinderData)

class App extends Component {
  constructor() {
    super();

    this.state = {
      data: district.findAllMatches(),
      cardClassToggle: 'hide-year-stats',
    }

    this.hideYearStats = this.hideYearStats.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  hideYearStats(e) {
    (this.state.cardClassToggle === 'hide-year-stats') ? this.setState({
      cardClassToggle: 'year-stats'
    }) : this.setState({
      cardClassToggle: 'hide-year-stats'
    })
  }

  handleChange(e) {
    this.setState({
      data: district.findAllMatches(e.target.value)
    })
  }

  render() {
    return (
      <div>
        <Search handleChange={ this.handleChange } />
        <DataContainer schoolInfo={ this.state.data } toggleClass={ this.state.cardClassToggle } hideYears={ this.hideYearStats } />
      </div>
    )
  }
}

export default App;
