import React, { Component } from 'react';
import storageCalculator from './storageCalculator';
import './index.css';

class StorageSummary extends Component {
  render() {
    const spaceId = this.props.spaceDocument.spaceId;
    const spaceUrl = `https://www.containerstore.com/custom-closets/space/view.htm?spaceId=${spaceId}`;
    //Functions for calculating space that return objects
    const amountOfShelves = storageCalculator.calculateShelvingLength(this.props.spaceDocument);
    const amountOfHanging = storageCalculator.calculateHangingLength(this.props.spaceDocument);
    const amountOfDrawers = storageCalculator.calculateDrawers(this.props.spaceDocument);
    const amountOfShoes = storageCalculator.calculateShoeSpace(this.props.spaceDocument);
    return (
      <div>
        <h1>Storage Summary <a href={spaceUrl}>#{spaceId}</a></h1>
        <div className="card-container">
          {this.props.spaceDocument.design.users.map((user, index) => (
            <div className="user" key={index}>
              <h2>{user.name}</h2>
              <ul className="card">
                <li>Shelves: {amountOfShelves[user.id]}</li>
                <li>Hanging: {amountOfHanging[user.id]}</li>
                <li>Shoes: {amountOfShoes[user.id] ? amountOfShoes[user.id] : 0} shoes</li>
                <li>Drawers: {amountOfDrawers[user.id] ? amountOfDrawers[user.id] : 0} </li>
              </ul>
            </div>
            )
          )}

        <div className="user">
          <h2>Total</h2>
          <ul className="card">
            <li>Shelves: {amountOfShelves["total"]}</li>
            <li>Hanging: {amountOfHanging["total"]}</li>
            <li>Shoes: {amountOfShoes["total"]} shoes</li>
            <li>Drawers: {amountOfDrawers["total"]} </li>
          </ul>
        </div>
      </div>
      </div>
    );
  }
}

export default StorageSummary;