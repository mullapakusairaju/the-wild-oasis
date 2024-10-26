import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import {
  HiMiniIdentification,
  HiOutlineCog6Tooth,
  HiOutlineHome,
  HiOutlineUsers,
} from "react-icons/hi2";
import { HiOutlineCalendarDays } from "react-icons/hi2";
import { HiOutlineHomeModern } from "react-icons/hi2";

export default function MainNav() {
  const StyledMainNav = styled.div`
    padding: 16px;
    margin-top: 36px;
    background-color: #f5f5f5;
    border-radius: 8px;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
    height: 60vh;
    display: flex;
    justify-content: start;
  `;

  const StyledUl = styled.ul`
    list-style-type: none;
    padding: 0px;
    /* display: flex;
    gap: 16px;  Space between menu items */
  `;

  const StyledLi = styled.li`
    display: flex;
    padding: 16px 0px;
  `;

  const StyledNavLink = styled(NavLink)`
    text-decoration: none;
    color: #333;
    padding: 8px 12px;
    border-radius: 4px;
    display: flex;
    justify-content: space-between;
    transition: background-color 0.3s, color 0.3s;

    &:hover {
      background-color: #e0e0e0;
      color: #000;
    }

    &.active {
      background-color: #333;
      color: #fff;
    }
  `;

  const StyledSpan = styled.span`
    padding: 0px 12px;
  `;

  return (
    <StyledMainNav>
      <StyledUl>
        <StyledLi>
          <StyledNavLink to="/dashboard">
            <HiOutlineHome />
            <StyledSpan>Dashboard</StyledSpan>
          </StyledNavLink>
        </StyledLi>
        <StyledLi>
          <StyledNavLink to="/accounts">
            <HiMiniIdentification />
            <StyledSpan>Accounts</StyledSpan>
          </StyledNavLink>
        </StyledLi>
        <StyledLi>
          <StyledNavLink to="/bookings">
            <HiOutlineCalendarDays />
            <StyledSpan>Bookings</StyledSpan>
          </StyledNavLink>
        </StyledLi>
        <StyledLi>
          <StyledNavLink to="/cabins">
            <HiOutlineHomeModern />
            <StyledSpan>Cabins</StyledSpan>
          </StyledNavLink>
        </StyledLi>

        <StyledLi>
          <StyledNavLink to="/users">
            <HiOutlineUsers />
            <StyledSpan>Users</StyledSpan>
          </StyledNavLink>
        </StyledLi>

        <StyledLi>
          <StyledNavLink to="/settings">
            <HiOutlineCog6Tooth />
            <StyledSpan>Settings</StyledSpan>
          </StyledNavLink>
        </StyledLi>
      </StyledUl>
    </StyledMainNav>
  );
}
