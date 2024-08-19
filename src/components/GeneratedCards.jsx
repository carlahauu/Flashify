import React from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";

function GeneratedCards(props) {
  const geminiKey = import.meta.env.VITE_GEMINI_API_KEY
  const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  async function generate() {
    const prompt = `Generate flashcards for these notes: ${notes}`;
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    const flashcards = JSON.parse(text)
    console.log(flashcards)
  }
  return (
    <div>
        <button onClick={() => generate()}>Generate</button>
    </div>
  );
}

export default GeneratedCards;
