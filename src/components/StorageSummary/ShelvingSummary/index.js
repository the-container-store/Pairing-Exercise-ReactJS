import * as React from 'react';

import { SummaryRow } from '../SummaryRow'
import { toFeetAndInches } from '../utilities/toFeetAndInches'
import './ShelvingSummary.css'

export const ShelvingSummary = (props) => {
  const calculations = props.calculations.map(calculation => toFeetAndInches(calculation.totalShelfWidth))
  
  return (
    <SummaryRow label="SHELVING (FT)" calculations={calculations}/>
  )
}