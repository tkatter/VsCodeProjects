import { useState } from "react";

const questions = [
  {
    id: 3457,
    question: "What language is React based on?",
    answer: "JavaScript",
  },
  {
    id: 7336,
    question: "What are the building blocks of React apps?",
    answer: "Components",
  },
  {
    id: 8832,
    question: "What's the name of the syntax we use to describe a UI in React?",
    answer: "JSX",
  },
  {
    id: 1297,
    question: "How to pass data from parent to child components?",
    answer: "Props",
  },
  {
    id: 9103,
    question: "How to give components memory?",
    answer: "useState hook",
  },
  {
    id: 2002,
    question:
      "What do we call an input element that is completely synchronised with state?",
    answer: "Controlled element",
  },
];

export const FlashCards = function () {
  const [selectedId, setSelectedId] = useState(null);

  function handleClick(id) {
    setSelectedId(id !== selectedId ? id : null);
    // if (selectedId !== id) {
    //   setSelectedId(id);
    // } else {
    //   setSelectedId(null);
    // }
  }

  return (
    <div className="flashcards">
      {/* Render list from questions array */}
      {questions.map((question) => (
        <div
          className={question.id === selectedId ? "selected" : ""}
          onClick={() => handleClick(question.id)}
          key={question.id}
        >
          <p>
            {question.id === selectedId ? question.answer : question.question}
          </p>
        </div>
      ))}
    </div>
  );
};
