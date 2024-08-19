import { height } from "@mui/system";
import React from "react";
import "../styles/Generate.css";
import { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";

function Generate() {
  const [generated, setGenerated] = useState(false);
  const [notes, setNotes] = useState("");
  const geminiKey = import.meta.env.VITE_GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  async function generate() {
    const prompt = `Generate flashcards for these notes: ${notes}`;
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    const flashcards = JSON.parse(text);
    console.log(flashcards);
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="generateContainer">
      <h1 className="generateTitle">Generate Flashcards!</h1>
      <p className="generateInstructions">
        Simply paste or type your notes into the text box. Our AI will
        automatically generate flashcards from your content. For a more focused
        set, list specific terms or questions you'd like included.
      </p>
      <form onSubmit={() => handleSubmit()}> 
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
    </div>
  );
}

export default Generate;
