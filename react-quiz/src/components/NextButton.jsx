function NextButton({ dispatch, answer }) {
  function handleClick() {
    dispatch({ type: "next" });
  }

  if (answer === null) return null;

  return (
    <button className="btn btn-ui" onClick={handleClick}>
      Next
    </button>
  );
}

export default NextButton;
