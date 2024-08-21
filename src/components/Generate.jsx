import React from "react";
import "../styles/Generate.css";
import { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";

function Generate() {
  const [generated, setGenerated] = useState(false);
  const [notes, setNotes] = useState("");
  const [flashCards, setFlashCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState(false);
  const geminiKey = import.meta.env.VITE_GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  async function generate() {
    console.log("loading");
    const prompt = `Generate flashcards for these notes: ${notes}. Return in JSON format so that I can easily access the front and back info for each card. No need to have "JSON" in the beginning. Please come in [] brackets. Please use the term front and back in the JSON data.`;
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    const parsedJSON = JSON.parse(text);
    setFlashCards(parsedJSON);
    setGenerated(!generated);
  }

  const submitForm = async (event) => {
    event.preventDefault();
  };

  const flipCards = async (index) => {
    setFlippedCards(!flippedCards);
    setFlippedCardIndex(index === flippedCardIndex ? null : index);
  };

  const [flippedCardIndex, setFlippedCardIndex] = useState(null);

  return (
    <div className="generateContainer">
      <h1 className="generateTitle">Generate Flashcards!</h1>
      {!generated ? (
        <>
          <p className="generateInstructions">
            Simply paste or type your notes into the text box. Our AI will
            automatically generate flashcards from your content. For a more
            focused set, list specific terms or questions you'd like included.
          </p>
          <form onSubmit={submitForm}>
            <textarea
              inputMode="textField"
              placeholder="Simply paste or type your notes into the text box."
              style={{ width: "100%", height: "300px", fontSize: "20px" }}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              required
            ></textarea>
            <button
              onClick={() => generate()}
              className="generateButton"
              type="submit"
            >
              Generate Flashcards!
            </button>
          </form>
        </>
      ) : (
        <p></p>
      )}
      <div>
        {flashCards.map((data, index) => {
          const isFlipped = index === flippedCardIndex; 
          return (
            <div
              onClick={() => flipCards(index)}
              className="frontCardContainer"
              style={{ color: "white" }}
              key={index}
            >
              <div className="frontCard">
                {isFlipped ? data.back : data.front}
              </div>
            </div>
          );
        })}
      </div>
      {generated && (
        <div className="generateButtons">
          <button className="generateNewButton"><a style={{color: "white", textDecoration: "none"}} href="/generate">Generate New Cards!</a></button>
        </div>
      )}
    </div>
  );
}

export default Generate;
