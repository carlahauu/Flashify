import { SignUp, SignUpButton } from "@clerk/clerk-react";
import React from "react";
import Navbar from "../components/Navbar";

export function Signup() {
  return (
    <>
      <SignUp></SignUp>
      <SignUpButton></SignUpButton>
    </>
  );
}
