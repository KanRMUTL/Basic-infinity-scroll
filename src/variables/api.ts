const movieDatabaseAPI = process.env.REACT_APP_MOVIE_DATABASE_API;
const token = process.env.REACT_APP_ACCESS_TOKEN
  ? process.env.REACT_APP_ACCESS_TOKEN
  : "";
const movieImageURL = process.env.REACT_APP_MOVIE_IMAGE_URL;
const ORIGINAL_SIZE = `${movieImageURL}/original/`;
const W500_SIZE = `${movieImageURL}/w500/`;

export { ORIGINAL_SIZE, W500_SIZE, movieDatabaseAPI, token };
