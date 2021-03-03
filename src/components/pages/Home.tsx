import React from "react";
import { auth } from "../../plugins/firebase";

export default function Home() {
  const logout = () => {
    auth
      .signOut()
      .then(() => {
        console.log("sign outした");
      })
      .catch(() => {
        console.log("sign out出来なかった");
      });
  };
  return (
    <div>
      Home Test
      <button onClick={logout}>サインアウト</button>
    </div>
  );
}
