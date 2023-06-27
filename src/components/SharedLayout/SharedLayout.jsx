//  Header

import { Header, Nav, NavLinkk } from './SharedLayot.styled';
import { Loader } from 'components/Loader/Loader';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

export const SharedLayout = () => {
  return (
    <>
      <Header>
        <Nav>
          <NavLinkk to="/">Home</NavLinkk>
          <NavLinkk to="/movies">Movies</NavLinkk>
        </Nav>
      </Header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

//під xедером розташована page Home та page Movies
