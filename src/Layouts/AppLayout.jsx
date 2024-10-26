import React from "react";
import { Outlet } from "react-router-dom";
import Slidebar from "../Ui/Slidebar";
import Header from "../Ui/header";
import styled from "styled-components";

export default function AppLayout() {
  const StyledAppLayout = styled.div`
    display: grid;
    grid-template-columns: 16rem 1fr;
    grid-template-rows: auto 1fr;
    height: 100vh;
  `;

  const Main = styled.main`
    background-color: antiquewhite;
  `;

  return (
    <StyledAppLayout>
      <Header />
      <Slidebar />

      <Main>
        <Outlet></Outlet>
      </Main>
    </StyledAppLayout>
  );
}
