import React, { Component } from "react";
import UserCard from "./UserCard";
import "./index.css";

class StorageSummary extends Component {
  render() {
    const spaceId = this.props.spaceDocument.spaceId;
    const spaceUrl = `https://www.containerstore.com/custom-closets/space/view.htm?spaceId=${spaceId}`;

    return (
      <div>
        <h1>
          Storage Summary <a href={spaceUrl}>#{spaceId}</a>
        </h1>
        {this.props.spaceDocument.design.users.map(user => (
          <UserCard spaceDocument={this.props.spaceDocument} user={user} />
        ))}
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
