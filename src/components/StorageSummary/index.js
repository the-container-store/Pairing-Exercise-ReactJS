import React, { Component } from 'react';
import storageCalculator from './storageCalculator';

class StorageSummary extends Component {
  render() {
    const spaceId = this.props.spaceDocument.spaceId;
    const spaceUrl = `https://www.containerstore.com/custom-closets/space/view.htm?spaceId=${spaceId}`;
    const amountOfShelves = storageCalculator.calculateShelvingLength(this.props.spaceDocument);
    const users = this.props.spaceDocument.design.users
    return (
      <div>
        <h1>Storage Summary <a href={spaceUrl}>#{spaceId}</a></h1>
        <div className="container">
          {users.map(user => {
            return (
              <UserCard
                key={user.id}
                title={user.name}
                shelvesAmt={amountOfShelves}
              />
            )
          })}
          <UserCard title={'Total'} />
        </div>
      </div>
    );
  }
}

function UserCard(props) {
  const { title = '', shelvesAmt = 0, hangingAmt = 0, shoesAmt = 0, drawersAmt = 0 } = props
  return (
    <div className="user">
      <h2>{title}</h2>
      <ul className={"card"}>
        <li>Shelves: {shelvesAmt} inches</li>
        <li>Hanging: {hangingAmt} inches</li>
        <li>Shoes: {shoesAmt} shoes</li>
        <li>Drawers: {drawersAmt}</li>
      </ul>
    </div>
  )
}

export default StorageSummary;