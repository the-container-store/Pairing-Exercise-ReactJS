import * as React from 'react';

import { SummaryRow } from '../SummaryRow'
import './DrawersSummary.css'

export const DrawersSummary = (props) => {
  const calculations = props.calculations.map(calculation => {
    return calculation.totalDrawerCount
  })

  return (
    <SummaryRow label="DRAWERS" calculations={calculations}/>
  )
}