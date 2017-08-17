import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Search extends Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log('clicked');
  }

  render() {
    return(
      <div className='search-field'>
        <input className='search' placeholder='Search' onChange={ this.props.handleChange }/>
        <button className='submit-btn' type='Submit' onClick={ this.handleClick }> Submit </button>
      </div>
    )
  }
}

Search.propTypes = {
  handleChange: PropTypes.func,
  handleClick: PropTypes.func
}
