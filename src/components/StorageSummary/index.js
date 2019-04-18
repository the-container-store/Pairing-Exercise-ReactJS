import React, { Component } from 'react';
import storageCalculator from './storageCalculator';

class StorageSummary extends Component {
  render() {
    const spaceId = this.props.spaceDocument.spaceId;
    const spaceUrl = `https://www.containerstore.com/custom-closets/space/view.htm?spaceId=${spaceId}`;
    const userCalculations = storageCalculator.calculateShelvingLength(this.props.spaceDocument);
    const totalShelves = Object.values(userCalculations).reduce((fin, stuff) => {
      const a = stuff.shelves
      return fin + a
    }, 0)

    return (
      <div>
        <h1>Storage Summary <a href={spaceUrl}>#{spaceId}</a></h1>
        <div className="user">
          {this.props.spaceDocument.design.users.map(user => (
            <div key={user.id}>
              <h2>{user.name}</h2>
              <ul>
                <li>Shelves: {userCalculations[user.id].shelves} inches</li>
                <li>Hanging: ? inches</li>
                <li>Shoes: ? shoes</li>
                <li>Drawers: ? </li>
              </ul>
            </div>
          ))}

        </div>
        <div className="user">
          <h2>Total</h2>
          <ul>
            <li>Shelves: {totalShelves} inches</li>
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