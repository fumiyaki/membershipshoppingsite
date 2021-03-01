import React from "react";
import Home from "../components/pages/Home";
import SignIn from "../components/pages/SignIn";

type RouteProps = {
  path: string;
  children: React.ReactNode;
  exact?: boolean;
}[];

const routePaths: RouteProps = [
  {
    path: "(/)?",
    exact: true,
    children: () => {
      return <Home />;
    },
  },
  {
    path: "/signin",
    exact: true,
    children: <SignIn />,
  },
];

export default routePaths;
