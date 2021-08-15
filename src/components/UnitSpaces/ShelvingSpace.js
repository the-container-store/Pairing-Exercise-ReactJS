import React, {useState, useEffect} from "react";
import Card from '../UI/Card'
import styled from "styled-components";
import storageCalculator from "../StorageSummary/storageCalculator";
const StyledList = styled.ul`
  display: flex;
  li:first-child(){
    font-weight: 700;
  }
`;

const ShelvingSpace = (props) => {
const [shelfLength, setShelfLength] = useState([]);
const [total, setTotal ] = useState(0);
  console.log("Shelf space");

useEffect(() => {
  const mmArr = []
  props.users.forEach((user)=>{
    console.log(user);
    const amt = storageCalculator.calculateShelvingLength(props.data, user);
    mmArr.unshift(amt)
    const total = mmArr.reduce((a,b) => a + b, 0);
    setTotal(total)
  })
 setShelfLength(mmArr)
}, [props]);


// storageCalculator.calculateShelvingLength(props.data, props.users[0])
// getting NaN when there are two + users
// const shelves = props.users.map(us =>(<li>{storageCalculator.convInToFt(shelfLength)}</li>))
  return (
    <Card>
      <StyledList>
        <li className="unitType">{props.unitType}</li>
        {props.users.length === 1 ? <li>{storageCalculator.convInToFt(shelfLength)}</li> : null}
        {props.users.length === 1 ? <li>{storageCalculator.convInToFt(total)}</li> : null}
      </StyledList>
    </Card>
  );
};

export default ShelvingSpace;
