import React, { useEffect } from "react";
import { auth } from "../../plugins/firebase";
import { useHistory } from "react-router-dom";
import firebase from "firebase/app";
type Props = {
  children: React.ReactNode;
};
const Auth = ({ children }: Props): JSX.Element => {
  const history = useHistory();
  useEffect(() => {
    let sub: firebase.Unsubscribe;
    sub = auth.onAuthStateChanged((user) => {
      if (!user) {
        history.push("/signin");
      }
    });

    return () => {
      if (sub) {
        sub();
      }
    };
  });

  return <>{children}</>;
};

export default Auth;
