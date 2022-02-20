import React, { useEffect } from "react";
import getMovies from "client/getMovies";
import { useState } from "react";
import { Movie } from "types/Movie";
import MovieItem from "MovieItem/MovieItem";
import { Wrapper } from "App.styled";
function App() {
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      setMovies(await getMovies(page));
    };
    fetchMovies();
  }, [page]);

  return (
    <Wrapper>
      {movies.map((movie) => (
        <MovieItem key={movie.id} movie={movie} />
      ))}
    </Wrapper>
  );
}

export default App;
