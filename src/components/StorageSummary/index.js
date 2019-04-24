import React, { Component } from 'react';
import storageCalculator from './storageCalculator';
import './styles.css';

class StorageSummary extends Component {
  render() {
    const spaceId = this.props.spaceDocument.spaceId;
    const spaceUrl = `https://www.containerstore.com/custom-closets/space/view.htm?spaceId=${spaceId}`;
    const amountOfShelves = storageCalculator.calculateShelvingLength(this.props.spaceDocument);
    console.log(amountOfShelves)

    const summaryList = (user,shelves) =>{
      return(
        <div className="user">
        <h2>{user}</h2>
          <ul>
            <li>Shelves: {shelves} inches</li>
            <li>Hanging: ? inches</li>
            <li>Shoes: ? shoes</li>
            <li>Drawers: ? </li>
          </ul>
          </div>
      )
    }

    let totalShelves = 0;
    amountOfShelves.forEach(user=>{totalShelves+=user.totalShelves})

    return (
      <div>
        <h1>Storage Summary <a href={spaceUrl}>#{spaceId}</a></h1>
       
          {
            amountOfShelves.map(user=>summaryList(user.userName,user.totalShelves)            )
          }
      
          {summaryList("Total",totalShelves)}

    
      </div>
    );
  }
}

export default StorageSummary;