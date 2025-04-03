import { useState } from "react";
import "./App.css";
import Service from "./Service";
import Bill from "./Bill";
import Message from "./Message";

export default function App() {
  const [billValue, setBillValue] = useState("");
  const [yourTip, setYourTip] = useState(0.1);
  const [friendTip, setFriendTip] = useState(0.1);
  function handleReset() {
    setBillValue("");
  }

  return (
    <>
      <h1>Tip Calculator</h1>
      <Bill billValue={billValue} setBillValue={setBillValue} />
      <Service tip={yourTip} onSelect={setYourTip}>
        <p>How did you like the service?</p>
      </Service>
      <Service tip={friendTip} onSelect={setFriendTip}>
        <p>How did your friend like the service?</p>
      </Service>
      <Message billValue={billValue} yourTip={yourTip} friendTip={friendTip} />
      <Reset onReset={handleReset} />
    </>
  );
}

function Reset({ onReset }) {
  return <button onClick={onReset}>Reset</button>;
}
