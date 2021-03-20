import React from 'react';
import Home from '../components/pages/Home';
import Shop from '../components/pages/Shop';
import SignIn from '../components/pages/SignIn';
import Auth from '../components/utils/Auth';

type RouteProps = {
  path: string;
  children: React.ReactNode;
  exact?: boolean;
}[];

const routePaths: RouteProps = [
  {
    path: '(/)?',
    exact: true,
    children: (
      <Auth>
        <Home />
      </Auth>
    )
  },
  {
    path: '/signin',
    exact: true,
    children: <SignIn />
  },
  {
    path: '/shops/:shop',
    children: (
      <Auth>
        <Shop />
      </Auth>
    )
  }
];

export default routePaths;
