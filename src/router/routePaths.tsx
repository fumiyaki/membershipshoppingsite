import React from "react";
import Home from "../components/pages/Home";
import SignIn from "../components/pages/SignIn";
import Auth from "../components/utlis/Auth";

type RouteProps = {
  path: string;
  children: React.ReactNode;
  exact?: boolean;
}[];

const routePaths: RouteProps = [
  {
    path: "(/)?",
    exact: true,
    children: (
      <Auth>
        <Home />
      </Auth>
    ),
  },
  {
    path: "/signin",
    exact: true,
    children: <SignIn />,
  },
];

export default routePaths;
