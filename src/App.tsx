import React, { useEffect, UIEvent } from "react";
import getMovies from "client/getMovies";
import { useState } from "react";
import { Movie } from "types/Movie";
import MovieItem from "MovieItem/MovieItem";
import { Wrapper, Content } from "App.styled";

const App = () => {
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const result = await getMovies(page);
      setMovies((pre) => [...pre, ...result]);
    };
    fetchMovies();
  }, [page]);

  const handleScroll = (event: UIEvent<HTMLDivElement>) => {
    const { scrollTop, clientHeight, scrollHeight } = event.currentTarget;
    if (scrollHeight - scrollTop === clientHeight) {
      setPage((prev) => prev + 1);
    }
  };

  return (
    <Wrapper>
      <Content onScroll={handleScroll}>
        {movies.map((movie) => (
          <MovieItem key={movie.id} movie={movie} />
        ))}
      </Content>
    </Wrapper>
  );
};

export default App;
