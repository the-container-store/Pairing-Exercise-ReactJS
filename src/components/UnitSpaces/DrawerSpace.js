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

const DrawerSpace = (props) => {
const [drawers, setDrawers] = useState([]);
const [total, setTotal ] = useState(0);
  console.log("Drawer space");

useEffect(() => {
  const drawerNos =[]
  props.users.forEach((user)=>{
    const amt = storageCalculator.calculateDrawersLength(props.data, user);
    drawerNos.unshift(amt)
    const total = drawerNos.reduce((a,b) => a + b, 0);
    console.log(total);
    setTotal(total)
  })
  setDrawers(drawerNos)
}, [props]);


  return (
    <Card>
      <StyledList>
        <li className="unitType">{props.unitType}</li>
        {props.users.length === 1 ? <li>{drawers}</li> : null}
        {props.users.length === 1 ? <li>{total}</li> : null}
      </StyledList>
    </Card>
  );
};

export default DrawerSpace;
