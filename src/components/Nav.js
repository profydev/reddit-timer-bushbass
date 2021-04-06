import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NavList = styled.ul`
  list-style: none;
`;

function Nav() {
  return (
    <nav>
      <NavList>
        <li>
          <NavLink activeClassName="active" exact to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/search">
            Search
          </NavLink>
        </li>
      </NavList>
    </nav>
  );
}

export default Nav;
