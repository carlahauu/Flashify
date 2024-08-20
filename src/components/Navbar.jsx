import React from "react";
import "../styles/Navbar.css";
import { SignIn, SignedOut, UserButton, SignedIn, SignInButton } from "@clerk/clerk-react";

function Navbar() {
  return (
    <>
      <nav className="flashifyNavBar">
        <div className="flashifyTitle">
          <a className="flashify" href="/">
            Flashify
          </a>
        </div>
        <SignedOut>
          <div className="navButtons">
            <button className="logInButton">
              <a href="/login">Log In</a>
            </button>
            <button className="signUpButton">
              <a href="/signup">Sign In</a>
            </button>
          </div>
        </SignedOut>
        <div className="flexifyProfile">
          <SignedIn>
            <UserButton className="userButton" />
            <p style={{ color: "white" }}>Profile</p>
          </SignedIn>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
