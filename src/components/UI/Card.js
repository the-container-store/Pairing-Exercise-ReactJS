import React from "react";
import styled from "styled-components";

const StyledCard = styled.div`
  border-radius: 5px;
  box-shadow: 0px 3px 5px 2px #dedede;
  margin-bottom: 1.5em;
  padding: 1em 0 1em 1em;
  ul {
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: flex-end;
    list-style: none;
    &:first-child{
        font-weight: 700;
      }
    li {
      padding: 0.75em 0;
      text-transform: uppercase;
      width: 6em;
      &:first-child{
        flex:1;
        text-align: left;
      }
    }
  }
  
`;

const Card = (props) => {
  return <StyledCard>{props.children}</StyledCard>;
};
export default Card;
