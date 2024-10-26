import React from "react";
import styled from "styled-components";
import Logo from "./Logo";
import MainNav from "./MainNav";

export default function Slidebar() {
  const StyledSlidebar = styled.aside`
    background-color: #e9c978;
    padding: 16px;
    grid-row: 1/-1;
  `;

  return (
    <StyledSlidebar>
      <Logo></Logo>
      <MainNav></MainNav>
    </StyledSlidebar>
  );
}
