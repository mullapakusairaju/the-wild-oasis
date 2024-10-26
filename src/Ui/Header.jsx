import React from "react";
import styled from "styled-components";

export default function Header() {
  const StyledHeader = styled.header`
    background-color: cadetblue;
    padding: 16px;
  `;

  return <StyledHeader>header</StyledHeader>;
}
