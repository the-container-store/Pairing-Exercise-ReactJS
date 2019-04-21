import * as React from 'react'

import './SummaryRow.css'

export const SummaryRow = (props) => {
  const useTotalClassName = (index) => {
    return props.calculations.length - 1 === index
      ? 'total'
      : ''
  }

  return (
    <div className={`SummaryRow ${props.className}`} data-testid="SummaryRow">
      <div className="main">
        <p>{props.label}</p>
        
        <div className="calculations">
          {props.calculations.map((calculation, index) => (
            <p key={`${calculation}${index}`} className={useTotalClassName(index)}>{calculation}</p>
          ))}
        </div>
      </div>
      {props.children}
    </div>
  )
}

SummaryRow.defaultProps = {
  className: ''
}

SummaryRow.Inner = (props) => {
  return <SummaryRow {...props} className="Inner" />
}