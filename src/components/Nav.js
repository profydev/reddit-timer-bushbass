import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NavList = styled.div`
  display: flex;
  justify-content: flex-end;
  list-style: none;
  .active {
    color: rgb(255, 0, 128);
  }
  a {
    display: inline-block;
    text-decoration: none;
    margin-left: 25px;
  }
  a:hover {
    transform: scale(1.1, 1.1);
    transition: 0.2s;
  }
`;

function Nav() {
  return (
    <nav>
      <NavList>
        <NavLink activeClassName="active" to="/search">
          Search
        </NavLink>
        <NavLink activeClassName="active" to="/howitworks">
          How it works
        </NavLink>
        <NavLink activeClassName="active" to="/about">
          About
        </NavLink>
      </NavList>
    </nav>
  );
}

export default Nav;
