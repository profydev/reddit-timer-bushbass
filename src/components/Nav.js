import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NavList = styled.ul`
  list-style: none;
  .active {
    color: rgb(255, 0, 128);
  }
  a {
    display: inline-block;
    text-decoration: none;
  }
  li a:hover {
    transform: scale(1.1, 1.1);
    transition: 0.2s;
  }
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
