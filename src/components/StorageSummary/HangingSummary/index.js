import * as React from 'react';

import { SummaryRow } from '../SummaryRow'
import { toFeetAndInches } from '../utilities/toFeetAndInches'
import './HangingSummary.css'

export const HangingSummary = (props) => {
  const calculations = props.calculations.map(calculation => {
    return toFeetAndInches(calculation.totalHangingHeight)
  })

  return (
    <SummaryRow label="HANGING (FT)" calculations={calculations}/>
  )
}