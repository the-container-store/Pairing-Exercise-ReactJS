import React from "react";
import storageCalculator from "./storageCalculator";

const UserCard = ({ spaceDocument, user }) => {
  const amountOfShelves = storageCalculator.calculateShelvingLength(
    spaceDocument,
    user.id
  );

  return (
    <div className="user" key={user.name}>
      <h2>{user.name}</h2>
      <ul>
        <li>Shelves: {amountOfShelves} inches</li>
        <li>Hanging: ? inches</li>
        <li>Shoes: ? shoes</li>
        <li>Drawers: ? </li>
      </ul>
    </div>
  );
};

export default UserCard;
