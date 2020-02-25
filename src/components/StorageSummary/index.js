import React, { Component } from 'react';
import storageCalculator from './storageCalculator';

class StorageSummary extends Component {
  render() {
    const spaceId = this.props.spaceDocument.spaceId;
    const spaceUrl = `https://www.containerstore.com/custom-closets/space/view.htm?spaceId=${spaceId}`;
    // const amountOfShelves = storageCalculator.calculateShelvingLength(this.props.spaceDocument);
    let shelflen0 = storageCalculator.widthOfShelvesByUser(
      this.props.spaceDocument,
      this.props.spaceDocument.design.users[0].id);
    let totallen = shelflen0;
    let shelflen1 = 0;
    if(this.props.spaceDocument.design.users[1]) {
      shelflen1 = storageCalculator.widthOfShelvesByUser(
        this.props.spaceDocument,
        this.props.spaceDocument.design.users[1].id)
      totallen += shelflen1;
    }
    return (
      <div>
        <h1>Storage Summary <a href={spaceUrl}>#{spaceId}</a></h1>
        <div className="user">
          <h2>{this.props.spaceDocument.design.users[0].name}</h2>
          <ul>
            <li>Shelves: {shelflen0} inches</li>
            <li>Hanging: ? inches</li>
            <li>Shoes: ? shoes</li>
            <li>Drawers: ? </li>
          </ul>
        </div>
        {this.props.spaceDocument.design.users[1] &&
        <div className="user">
          <h2>{this.props.spaceDocument.design.users[1].name}</h2>
          <ul>
            <li>Shelves: {shelflen1} inches</li>
            <li>Hanging: ? inches</li>
            <li>Shoes: ? shoes</li>
            <li>Drawers: ? </li>
          </ul>
        </div>
        }
        <div className="user">
          <h2>Total</h2>
          <ul>
            <li>Shelves: {totallen} inches</li>
            <li>Hanging: ? inches</li>
            <li>Shoes: ? shoes</li>
            <li>Drawers: ? </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default StorageSummary;