import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  background-color: aliceblue;
  padding-top: 30px;
  top: 0;
  left: 0;
  width: 100%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const Nav = styled.nav`
  padding-left: 300px;
  color: chocolate;
  padding-bottom: 20px;
`;

export const NavLinkk = styled(NavLink)`
  padding-right: 10px;
  font-size: 20px;
  color: black;
  text-decoration: none;

  &.active {
    color: cornflowerblue;
  }
`;
