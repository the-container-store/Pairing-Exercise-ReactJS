import React from "react";
import storageCalculator from "./storageCalculator";



const StorageSummary = ({spaceDocument}) => {
  const {spaceId, design}=spaceDocument

  const spaceUrl = `https://www.containerstore.com/custom-closets/space/view.htm?spaceId=${spaceId}`;
  const [shelvesByUser, totalShelving] = storageCalculator.calculateShelvingLength(
    spaceDocument
  );
  const [hangingByUser, totalHanging] = storageCalculator.calculateHangingLength(
    spaceDocument
  )
  
  return (
    <div>
      <h1>
        Storage Summary <a href={spaceUrl}>#{spaceId}</a>
      </h1>
      <div className="user">
        <h2 className='user-header'>{design.users[0].name}</h2>
        <hr />
        <ul className='user-space'>
          <li className='user-space-entry'>Shelves: {toInches( shelvesByUser[design.users[0].id])} inches</li>
          <li className='user-space-entry'>Hanging: {toInches(hangingByUser[design.users[0].id])} inches</li>
          <li className='user-space-entry'>Shoes: ? shoes</li>
          <li className='user-space-entry'>Drawers: ? </li>
        </ul>
      </div>
      {design.users[1] && (
        <div className="user">
          <h2 className="user-header">{design.users[1].name}</h2>
          <hr />
          <ul className="user-space">
            <li className="user-space-entry">Shelves: {toInches( shelvesByUser[design.users[1].id])} inches</li>
            <li className="user-space-entry">Hanging: {toInches( hangingByUser[design.users[1].id])} inches</li>
            <li className="user-space-entry">Shoes: ? shoes</li>
            <li className="user-space-entry">Drawers: ? </li>
          </ul>
        </div>
      )}
      <div className="user">
        <h2 className='user-header'>Total</h2>
        <hr />
        <ul className='user-space'>
          <li className='user-space-entry'>Shelves: {toInches(totalShelving) } inches</li>
          <li className='user-space-entry'>Hanging: {toInches(totalHanging)} inches</li>
          <li className='user-space-entry'>Shoes: ? shoes</li>
          <li className='user-space-entry'>Drawers: ? </li>
        </ul>
      </div>
    </div>
  );
};

export default StorageSummary;

function toInches(d) {
  return Math.round(d / 25.4);
}
