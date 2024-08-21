import React from "react";
import { SignIn } from "@clerk/clerk-react";
import Navbar from "../components/Navbar";
import "../styles/Login.css"

export function Login() {
  return (
    <>
      <div className="logInContainer">
        <SignIn path="/login"/>
      </div>
    </>
  );
}
