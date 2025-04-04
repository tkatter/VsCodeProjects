// MODULES
import { useState } from "react";

// MODULES
import NavBar from "./components/NavBar";
import Search from "./components/Search";
import NumResults from "./components/NumResults";

import MainPage from "./components/Main.1";
import Box from "./components/Box";
import MovieList from "./components/MovieList";
import WatchedSummary from "./components/WatchedSummary";
import WatchedMovieList from "./components/WatchedMovieList";

// DATA
import { tempMovieData } from "./data/data";
import { tempWatchedData } from "./data/data";

export default function App() {
  const [movies, setMovies] = useState(tempMovieData);
  const [watched, setWatched] = useState(tempWatchedData);

  return (
    <>
      <NavBar>
        <Search />
        <NumResults movies={movies} />
      </NavBar>

      <MainPage>
        <Box>
          <MovieList movies={movies} />
        </Box>
        <Box>
          <WatchedSummary watched={watched} />
          <WatchedMovieList watched={watched} />
        </Box>
      </MainPage>
    </>
  );
}
