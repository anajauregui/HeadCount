import React from 'react';
import PropTypes from 'prop-types';

const DataCards = ({location, yearData, toggleClass, hideYears}) => {

  let schoolYear= Object.keys(yearData)
  let pStyle = {
    color: 'aquamarine'
  }
  let lowScores = {
    color: 'red'
  }
  let percentages = schoolYear.map( (val, i) => {
    if (yearData[val] >= 0.5) {
      return <p style={pStyle} key={ i } > { val }: { yearData[val] } </p>
    } else {
      return <p style={lowScores} key={ i } > { val }: { yearData[val] } </p>
    }
  })

  return(
    <div className='data-card' onClick={ hideYears }>
      <div className='district-name' >
        <h2>{ location }</h2>
      </div>
      <div className={ toggleClass }>
        { percentages }
      </div>
    </div>
  )
}

DataCards.propTypes = {
  location: PropTypes.string.isRequired,
  yearData: PropTypes.object.isRequired,
  toggleClass: PropTypes.string.isRequired,
  hideYears: PropTypes.func.isRequired
}

export default DataCards;
