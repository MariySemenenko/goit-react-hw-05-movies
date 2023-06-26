import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Links = styled(Link)`
  color: cornflowerblue;

  &.active {
    color: black;
  }
`;

export const Li = styled.li`
  padding-top: 10px;
  list-style: none;
`;
