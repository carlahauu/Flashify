import { SignUp, SignUpButton } from "@clerk/clerk-react";
import React from "react";

export function Signup() {
  return (
    <>
      <div className="logInContainer">
      <SignUp path="/signup" />
      </div>
    </>
  );
}
