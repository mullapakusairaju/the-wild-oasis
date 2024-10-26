import React from "react";
import styled from "styled-components";

export default function Logo() {
  const StyledLogo = styled.div`
    display: flex;
    justify-content: center;
  `;

  return (
    <StyledLogo>
      <img
        src="https://www.shutterstock.com/image-vector/oasis-flat-logo-vector-your-600w-2049837122.jpg"
        alt="Logo"
        width={100}
      />
    </StyledLogo>
  );
}
