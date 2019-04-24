import React, { Component } from 'react';
import storageCalculator from './storageCalculator';
import './styles.css';

class StorageSummary extends Component {
  render() {
    const spaceId = this.props.spaceDocument.spaceId;
    const spaceUrl = `https://www.containerstore.com/custom-closets/space/view.htm?spaceId=${spaceId}`;
    const amountOfShelves = storageCalculator.calculateShelvingLength(this.props.spaceDocument);
    const summaryList = (shelves) =>{
      return(
          <ul>
            <li>Shelves: {shelves} inches</li>
            <li>Hanging: ? inches</li>
            <li>Shoes: ? shoes</li>
            <li>Drawers: ? </li>
          </ul>
      )
      
    }

    return (
      <div>
        <h1>Storage Summary <a href={spaceUrl}>#{spaceId}</a></h1>
        <div className="user">
          <h2>{this.props.spaceDocument.design.users[0].name}</h2>
          {summaryList(amountOfShelves)}
        
        </div>
        {this.props.spaceDocument.design.users[1] &&
        <div className="user">
          <h2>{this.props.spaceDocument.design.users[1].name}</h2>
          {summaryList(amountOfShelves)}
        </div>
        }
        <div className="user">
          <h2>Total</h2>
          <ul>
            <li>Shelves: ? inches</li>
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