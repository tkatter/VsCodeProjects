function NextButton({ dispatch, answer, numQuestions, index }) {
  function handleClick(action) {
    dispatch({ type: action });
  }

  if (answer === null) return null;

  if (index < numQuestions - 1) {
    return (
      <button className="btn btn-ui" onClick={() => handleClick("next")}>
        Next
      </button>
    );
  }
  if (index === numQuestions - 1) {
    return (
      <button className="btn btn-ui" onClick={() => handleClick("finish")}>
        Finish
      </button>
    );
  }
}

export default NextButton;
