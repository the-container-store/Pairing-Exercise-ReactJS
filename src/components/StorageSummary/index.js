import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ShelvingSpace from "../UnitSpaces/ShelvingSpace";
import DrawerSpace from "../UnitSpaces/DrawerSpace";
import ShoeSpace from "../UnitSpaces/ShoeSpace";

const StyledWrapper = styled.div`
  align-items: flex-start;
  background: #f6f8fa;
  display: flex;
  flex-direction: column;
  width: 100%;

  ul {
    list-style: none;
    font-size: 1.2rem;
  }
  .wrapper__summary-details {
    padding: 1em 0em;
    margin-left: 2em;
    min-width: 50%;
  }
  .summary-headings {
    display: flex;
    justify-content: flex-end;
    list-style: none;
    padding: 0;
    li {
      padding: 0.75em 0;
      text-transform: uppercase;
      width: 6em;
      &:last-child{
        color: #999;
      }
    }
  }
  h1 {
    background: #eaebef;
    font-size: 2rem;
    padding: 0.75em 0em 0.75em 1em;
    text-align: left;
    width: 100%;
    span.contBlue {
      display: inline-block;
      padding: 8px 16px;
      background: #005DAB;
      color: #fff;
      border-radius: 32px;
    }
  }
`;

// typeof this.props.spaceDocument returns obj, not arr
const StorageSummary = (props) => {
  const [usersArr, setUsersArr] = useState([]);

  const spaceData = props.spaceDocument;
  const spaceId = props.spaceDocument.spaceId;
  const spaceUrl = `https://www.containerstore.com/custom-closets/space/view.htm?spaceId=${spaceId}`;

  useEffect(() => {
    const arr = [];
    spaceData.design.zones.forEach((zone) => {
      zone.sections.forEach((section) => {
        if (!arr.includes(section.userId)) {
          arr.push(section.userId);
        } else {
          return;
        }
      });
    });
    // assumes (i know!) user id will be u1 u2 . if mixed up 1us2 etc would not pass test
    arr.sort();
    setUsersArr(arr);
  }, [spaceData.design.zones]);
  // console.log(usersArr);
  return (
    <StyledWrapper className="wrapper__summary">
      <h1>
        <span className="contBlue">Storage Summary</span> <a href={spaceUrl}>#{spaceId}</a>
      </h1>

      <div className="wrapper__summary-details">
        <ul className="summary-headings">
          {spaceData.design.users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
          <li>Total</li>
        </ul>

        <ShelvingSpace unitType="storage" users={usersArr} data={spaceData} />
        <DrawerSpace unitType="drawers" users={usersArr} data={spaceData} />
        <ShoeSpace unitType="Shoes (Pairs)" users={usersArr} data={spaceData} />
      </div>
    </StyledWrapper>
  );
};

export default StorageSummary;
