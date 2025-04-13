import { useNavigate } from "react-router-dom";
import Button from "./Button";

function BackButton({ navigateTo = -1 }) {
  const navigate = useNavigate();
  return (
    <Button
      type={"back"}
      onClick={(e) => {
        e.preventDefault();
        navigate(navigateTo);
      }}
    >
      &larr; Back
    </Button>
  );
}

export default BackButton;
