import React from "react";

const UserCard = ({ user, amountOfShelves }) => (
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

export default UserCard;
