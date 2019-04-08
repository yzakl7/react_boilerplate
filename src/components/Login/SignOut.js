import React from "react";
import { withFirebase } from "../Firebase";

const SignOutButton = ({ firebase }) => (
  <a onClick={firebase.doSignOut} href="">
    Log out
  </a>
);

export default withFirebase(SignOutButton);
