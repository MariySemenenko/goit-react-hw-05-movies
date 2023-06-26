import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Button = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  color: cornflowerblue;

  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1), 0 0 8px cornflowerblue;

  &:hover {
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2), 0 0 8px cornflowerblue;
  }

  &:active {
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1), 0 0 4px cornflowerblue;
  }
`;

export const Img = styled.img`
  margin-top: 20px;
  padding-left: 50px;
`;

export const P = styled.p`
  width: 500px;
  color: cornflowerblue;
  padding-left: 50px;
`;
export const Title = styled.p`
  font-size: 30px;
  color: cornflowerblue;
  padding-left: 50px;
`;

export const Ul = styled.ul`
  margin-top: 20px;
  padding-left: 50px;
  list-style: none;
`;
export const Li = styled.li`
  color: cornflowerblue;
  padding-top: 10px;
`;

export const Links = styled(NavLink)`
  padding-right: 10px;

  font-size: 20px;
  color: black;

  &.active {
    color: cornflowerblue;
  }
`;
export const None = styled.ul`
  list-style: none;
`;

export const Div = styled.div`
  display: flex;
`;
