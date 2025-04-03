import "./App.css";
import { FlashCards } from "./FlashCards";

export default function App() {
  return (
    <div className="App">
      <FlashCards />
      <Form />
    </div>
  );
}

function Form() {
  return (
    <div>
      <form className="form">
        <input type="text" placeholder="Insert text here..."></input>
        <button>Submit</button>
      </form>
    </div>
  );
}
