import React from 'react';
import styled from 'styled-components';
import Nav from './Nav';
import { ReactComponent as RedditLogo } from '../images/reddit.svg';

const HeaderStyled = styled.header`
  height: 100px;
  display: grid;
  grid-template-columns: 80px 1fr 1fr 80px;
  align-items: center;
  .logo {
    grid-column: 2/3;
  }
  .nav {
    grid-column: 3/4;
    justify-self: end;
  }
`;

function Header() {
  return (
    <HeaderStyled>
      <RedditLogo className="logo" />
      <Nav className="nav" />
    </HeaderStyled>
  );
}
export default Header;
