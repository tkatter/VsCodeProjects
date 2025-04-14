import { useQuiz } from "../contexts/QuizContext";

function StartScreen() {
  const { numQuestions, dispatch } = useQuiz();

  function handleOnClick() {
    dispatch({ type: "startQuiz" });
  }

  return (
    <div className="start">
      <h2>Welcome to The React Quiz!</h2>
      <h3>{numQuestions} questions to test your React mastery</h3>
      <button className="btn btn-ui" onClick={handleOnClick}>
        Let's start!
      </button>
    </div>
  );
}

export default StartScreen;
