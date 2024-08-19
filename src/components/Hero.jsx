import React from "react";
import "../styles/Hero.css";
import { SignedOut, SignedIn } from "@clerk/clerk-react";

export function Hero() {
  return (
    <>
      <h1 className="heroTitle">
        Craft Your Knowledge, <br></br>Flash by Flash.
      </h1>
      <button className="heroGetStartedBtn">
        <SignedOut>
          <a
            className="heroGetStarted"
            href="/signup"
            style={{ color: "black" }}
          >
            Get Started Today!
          </a>
        </SignedOut>
        <SignedIn>
        <a
            className="heroGetStarted"
            href="/generate"
            style={{ color: "black" }}
          >
            Get Started Today!
          </a>
        </SignedIn>
      </button>
    </>
  );
}
