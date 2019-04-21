import * as React from 'react';

import { ShelvingSummary } from './ShelvingSummary'
import { DrawersSummary } from './DrawersSummary'
import { HangingSummary } from './HangingSummary'
import * as storageCalculator from './storageCalculator';
import './StorageSummary.css'

const StorageSummary = (props) => {
  const {spaceId} = props.spaceDocument;
  const spaceUrl = `https://www.containerstore.com/custom-closets/space/view.htm?spaceId=${spaceId}`;
  const calculations: Array = storageCalculator.calculateUserStorage(props.spaceDocument);

  return (
    <div className="StorageSummary" data-testid="StorageCalculator">
      <div className="header">
        <h3>Storage Summary <a href={spaceUrl}>#{spaceId}</a></h3>
      </div>
      <div className="body">
        <HangingSummary calculations={calculations} />
        <DrawersSummary calculations={calculations} />
        <ShelvingSummary calculations={calculations} />
      </div>
    </div>
  )
}

export default StorageSummary;