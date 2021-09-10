import React, { Component } from 'react';
import {
  calculateShelvingLength,
  calculateHangingShelvingLength,
  calculateShoeSpace,
  calculateDrawerSpace
} from './storageCalculator';

class StorageSummary extends Component {
  render() {
    const spaceId = this.props.spaceDocument.spaceId;
    const spaceUrl = `https://www.containerstore.com/custom-closets/space/view.htm?spaceId=${spaceId}`;
    const users = this.props.spaceDocument.design.users;
    let shelvesTotal = 0;
    let hangingShelvesTotal = 0;
    let shoeSpaceTotal = 0;
    let drawerSpaceTotal = 0;

    return (
      <div>
        <h1>Storage Summary <a href={spaceUrl}>#{spaceId}</a></h1>
        <div className="container">
          {users.map(user => {
            const amountOfShelves = calculateShelvingLength(this.props.spaceDocument, user.id);
            const amountOfHangingShelves = calculateHangingShelvingLength(this.props.spaceDocument, user.id);
            const amountOfShoeSpace = calculateShoeSpace(this.props.spaceDocument, user.id);
            const amountOfDrawers = calculateDrawerSpace(this.props.spaceDocument, user.id);
            shelvesTotal += amountOfShelves;
            hangingShelvesTotal += amountOfHangingShelves;
            shoeSpaceTotal += amountOfShoeSpace;
            drawerSpaceTotal += amountOfDrawers;

            return (
              <UserCard
                drawersAmt={amountOfDrawers}
                hangingAmt={amountOfHangingShelves}
                key={user.id}
                shelvesAmt={amountOfShelves}
                shoesAmt={amountOfShoeSpace}
                title={user.name}
              />
            )
          })}
          <UserCard
            drawersAmt={drawerSpaceTotal}
            hangingAmt={hangingShelvesTotal}
            shelvesAmt={shelvesTotal}
            shoesAmt={shoeSpaceTotal}
            title={'Total'}
          />
        </div>
      </div>
    );
  };
};


function UserCard(props) {
  const { title = '', shelvesAmt = 0, hangingAmt = 0, shoesAmt = 0, drawersAmt = 0 } = props;

  return (
    <div className="user">
      <h2>{title}</h2>
      <ul className={"card"}>
        <li>Shelves: {shelvesAmt}</li>
        <li>Hanging: {hangingAmt}</li>
        <li>Shoes: {shoesAmt}</li>
        <li>Drawers: {drawersAmt}</li>
      </ul>
    </div>
  );
};

export default StorageSummary;