import React, { FC } from "react";
import { Movie } from "types/Movie";
import { Wrapper, Poster } from "./styled";
import { W500_SIZE } from "variables/api";

interface Props {
  movie: Movie;
}

const MovieItem: FC<Props> = ({ movie: { title, backdrop_path } }) => {
  const posterUrl = `${W500_SIZE}/${backdrop_path}`;

  return (
    <Wrapper>
      <Poster src={posterUrl} />
      {title}
    </Wrapper>
  );
};

export default MovieItem;
