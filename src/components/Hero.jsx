import React from "react";
import "../styles/Hero.css";
import { SignedOut, SignedIn } from "@clerk/clerk-react";

export function Hero() {
  return (
    <>
    <div className="heroContainer">
      <h1 className="heroTitle">
        Craft Your Knowledge, <br></br>Flash by Flash.
      </h1>
      <p className="heroDescription">Powered by Google's Gemini AI</p>
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
      <img src="https://media.discordapp.net/attachments/407710496670875661/1275413785682640927/Demo_of_Flashify.png?ex=66c5cd26&is=66c47ba6&hm=0327050015177ee32bde019b9f9a32060a45bda483de36d172e554b71318baf7&=&format=webp&quality=lossless&width=1064&height=700" className="heroImg"/>
      </div>
    </>
  );
}
