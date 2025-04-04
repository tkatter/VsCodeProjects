import { useState } from "react";
import "./index.css";
import StarRating from "./components/StarRating";

export default function App() {
  return (
    <>
      <Test />
      <StarRating maxRating={5} />
      <StarRating maxRating={10} color="#6434eb" size={24} />
      <StarRating
        messages={["terrible", "not good", "ok", "good", "amazing"]}
      />
    </>
  );
}

function Test() {
  const [movieRating, setMovieRating] = useState(0);
  return (
    <div>
      <StarRating color="blue" maxRating={10} onSetRating={setMovieRating} />
      <p>This movie was rated {movieRating} stars</p>
    </div>
  );
}
