import React from "react";
import { SignIn } from "@clerk/clerk-react";
import Navbar from "../components/Navbar";

export function Login() {
  return (
    <>
      <div className="logInContainer">
        <SignIn></SignIn>
      </div>
    </>
  );
}
