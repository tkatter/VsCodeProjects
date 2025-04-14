import { useQuiz } from "../contexts/QuizContext";

function Options() {
  const { questions, dispatch, index, answer } = useQuiz();
  const question = questions.at(index);

  function handleClick(i) {
    dispatch({ type: "newAnswer", payload: i });
  }

  const hasAnswered = answer !== null;
  function isCorrect(i) {
    if (hasAnswered) {
      if (i === question.correctOption) {
        return "correct";
      } else {
        return "wrong";
      }
    } else {
      return "";
    }
  }

  return (
    <div className="options">
      {question.options.map((option, i) => (
        <button
          className={`btn btn-option ${
            i === answer ? "answer" : ""
          } ${isCorrect(i)}`}
          key={i}
          disabled={hasAnswered}
          onClick={() => handleClick(i)}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default Options;
