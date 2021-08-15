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

const ShoeSpace = (props) => {
const [shoePairs, setShoePairs ] = useState(0);
const [total, setTotal ] = useState(0);
  console.log("Angled shoe space");

useEffect(() => {
  let pairarr = [];
  props.users.forEach((user)=>{
    pairarr = storageCalculator.calculateShoeShelfLength(props.data, user);
    const total = pairarr.reduce((a,b) => a + b, 0);
    setTotal(total)
  })
  setShoePairs(pairarr[0]);
}, [props]);


  return (
    <Card>
      <StyledList>
        <li className="unitType">{props.unitType}</li>
        {props.users.length === 1 ? <li>{shoePairs}</li> : null}
        {props.users.length === 1 ? <li>{total}</li> : null}
      </StyledList>
    </Card>
  );
};

export default ShoeSpace;
